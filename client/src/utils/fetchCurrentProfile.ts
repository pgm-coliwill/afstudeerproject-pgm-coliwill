import {  getCurrentUser } from "aws-amplify/auth";

export type ProfileInfo = {
  id: number;        // User's database ID from PostgreSQL
  firstName: string;
  lastName: string;
  cognitoId: string; // Cognito ID (sub)
};

export const fetchCurrentProfile = async (): Promise<ProfileInfo | null> => {
  try {
    // ✅ Get authenticated user from Cognito
    const user = await getCurrentUser();

    if (!user || !user.username) {
      throw new Error("User not authenticated");
    }

    // ✅ Get the user's Cognito ID (sub)
    const cognitoId = user.username; 

    // ✅ Fetch user profile from PostgreSQL using Cognito ID
    const response = await fetch(`http://localhost:3001/api/users/${cognitoId}`);

    if (!response.ok) {
      throw new Error("User not found in database");
    }

    // ✅ Parse and return the user profile from PostgreSQL
    const userProfile = await response.json();

    return {
      id: userProfile.id,           // PostgreSQL user ID
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      cognitoId: userProfile.cognitoId, // Cognito ID from PostgreSQL
    };
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};
