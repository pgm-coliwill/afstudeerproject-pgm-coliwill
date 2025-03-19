"use client";

import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { fetchAuthSession } from "aws-amplify/auth";
import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
      userPoolClientId:
        process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
    },
  },
});

I18n.putVocabularies(translations);
I18n.setLanguage("nl");

I18n.putVocabularies({
  nl: {
    "Sign In": "Inloggen",
    "Sign Up": "Registreren",
    "Forgot your password?": "Wachtwoord vergeten?",
    "Enter your email": "Voer je e-mailadres in",
    "Confirm Password": "Bevestig wachtwoord",
    "Sign Out": "Uitloggen",
  },
});

const formFields = {
  signIn: {
    username: {
      placeholder: "E-mail",
      label: "E-mail",
      isRequired: true,
    },
    password: {
      placeholder: "Wachtwoord",
      label: "Wachtwoord",
      isRequired: true,
    },
  },
  signUp: {
    username: { placeholder: "E-mail", label: "E-mail", isRequired: true },
    password: {
      placeholder: "Wachtwoord",
      label: "Wachtwoord",
      isRequired: true,
    },
    confirm_password: {
      placeholder: "Herhaal Wachtwoord",
      label: "Herhaal Wachtwoord",
      isRequired: true,
    },
  },
};

const components = {
  Header() {
    return (
      <div className="authHeader">
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
      </div>
    );
  },

  SignUp: {
    FormFields() {
      const searchParams = useSearchParams();
      const role = searchParams.get("role") || "ouder";

      return (
        <>
          <Authenticator.SignUp.FormFields />
          <input
            type="hidden"
            id="custom:role"
            name="custom:role"
            value={role}
            readOnly
          />
        </>
      );
    },
  },
};

const Auth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<string | null>(null);

  const isSignUpPage = pathname.match(/\/signup$/);
  const isSignInPage = pathname.match(/\/signin$/);
  const isDashboardPage = pathname.startsWith("/dashboard");

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const role = idToken?.payload["custom:role"] as string;
          setUserRole(role || "ouder");
        } catch (error) {
          console.error("Failed to fetch user role", error);
        }
      }
    };

    fetchUserRole();
  }, [user]);

  useEffect(() => {
    if (userRole) {
      if (user && isSignInPage) {
        router.push("/dashboard");
      } else if (user && isSignUpPage && userRole === "admin") {
        router.push("/registration/admin");
      } else if (
        user &&
        isSignUpPage &&
        (userRole === "leider" || userRole === "ouder")
      ) {
        router.push("/registration/code");
      }
    }
  }, [user, userRole, isSignInPage, isSignUpPage, router]);

  if (!isSignInPage && !isSignUpPage && !isDashboardPage) {
    return <>{children}</>;
  }

  return (
    <div className="h-full">
      <Authenticator
        initialState={pathname.includes("signup") ? "signUp" : "signIn"}
        components={components}
        formFields={formFields}
      >
        {() => <>{children}</>}
      </Authenticator>
    </div>
  );
};

export default Auth;
