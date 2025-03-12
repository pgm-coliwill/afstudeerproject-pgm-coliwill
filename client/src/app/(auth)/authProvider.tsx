"use client";

import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

// ✅ Move Amplify configuration outside the component to avoid reconfigurations
const configureAmplify = () => {
  if (
    !process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID ||
    !process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID
  ) {
    throw new Error("Missing Cognito environment variables");
  }

  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID,
        userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID,
      },
    },
  });
};

configureAmplify(); // Run the configuration once

// ✅ Move translations to a separate function for better organization
const setupTranslations = () => {
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
};

setupTranslations(); // Apply translations

// ✅ Custom Sign-Up Form Fields (Fix: Ensure `custom:role` is included)
const CustomSignUpFields = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "ouder";
  const { updateForm } = useAuthenticator();

  useEffect(() => {
    updateForm((prev: Record<string, any>) => ({
      ...prev,
      "custom:role": role,
    }));
  }, [role, updateForm]);

  return <Authenticator.SignUp.FormFields />;
};

// ✅ Define form fields separately for reusability
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

// ✅ Define Amplify UI components separately
const components = {
  Header() {
    return (
      <div className="authHeader">
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
      </div>
    );
  },
  SignUp: {
    FormFields: CustomSignUpFields,
  },
};

const Auth = ({ children }: { children: React.ReactNode }) => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();
  const pathname = usePathname();

  const isSignUpPage = pathname.match(/\/signup$/);
  const isSignInPage = pathname.match(/\/signin$/);
  const isDashboardPage =
    pathname.startsWith("/dashboard") || pathname.startsWith("/admin");

  // ✅ Improved redirect logic to avoid flickering
  useEffect(() => {
    if (authStatus !== "authenticated") return;

    if (isSignUpPage) {
      router.push("/signup/code");
    } else if (isSignInPage) {
      router.push("/dashboard");
    }
  }, [authStatus, isSignUpPage, isSignInPage, router]);

  // ✅ If user is not on auth-related pages, render children normally
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
