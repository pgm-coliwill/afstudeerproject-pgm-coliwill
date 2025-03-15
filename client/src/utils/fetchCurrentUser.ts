import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export type UserInfo = {
  email: string;
  sub: string;
  role: string;
};

export const fetchCurrentUser = async (): Promise<UserInfo | null> => {
  try {
    // ✅ Get user authentication session
    const session = await fetchAuthSession();
    const { idToken } = session.tokens ?? {};

    // ✅ Get the user from Cognito
    const user = await getCurrentUser();

    // ✅ Extract custom attributes (e.g., role)
    const userRole = idToken?.payload["custom:role"] || "No role found" ;

    // ✅ Store all user details
    const userData: UserInfo = {
      email: user.signInDetails?.loginId || "No email found",
      sub: user.userId,
      role: userRole as string,
    };

    console.log("Authenticated User Info:", userData);
    return userData;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
};
