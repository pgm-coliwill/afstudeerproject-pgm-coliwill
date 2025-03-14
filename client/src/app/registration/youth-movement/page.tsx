"use client";

import React, { useEffect, useState } from "react";
import RegisterJeugdbewegingForms from "@/components/forms/RegisterJeugdbewegingForms";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export default function Page() {
  interface UserInfo {
    email: string;
    sub: string;
    role: string;
  }

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // ✅ Get user authentication session
        const session = await fetchAuthSession();
        const { idToken } = session.tokens ?? {};

        // ✅ Get the user from Cognito
        const user = await getCurrentUser();

        // ✅ Extract custom attributes (e.g., role)
        const userRole = idToken?.payload["custom:role"] || "No role found";

        // ✅ Store all user details
        const userData = {
          email: user.signInDetails?.loginId || "No email found",
          sub: user.userId,
          role: userRole,
        };

        console.log("Authenticated User Info:", userData);
        setUserInfo(userData);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserDetails();
  }, []);

  console.log("User Info:", userInfo);

  return (
    <div>
      <RegisterJeugdbewegingForms />
    </div>
  );
}
