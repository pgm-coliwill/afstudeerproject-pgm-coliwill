import { getCurrentUser } from "aws-amplify/auth";

export type ProfileInfo = {
  id: number;         // User's database ID from PostgreSQL
  firstName: string;
  lastName: string;
  cognitoId: string;  // Cognito ID (sub)
  role: string;       // User's role (leader, parent, etc.)
  youthMovementId: number | null; // Youth Movement ID (if associated)
  youthMovementName: string | null; // Name of the youth movement
};

export const fetchCurrentProfile = async (): Promise<ProfileInfo | null> => {
  try {
    console.log("🔄 Fetching current profile...");

    // ✅ Get user from Cognito
    const user = await getCurrentUser();

    if (!user || !user.username) {
      throw new Error("User not authenticated");
    }

    // ✅ Get the user's Cognito ID (sub)
    const cognitoId = user.username;

    console.log("✅ Cognito ID:", cognitoId);

    // ✅ Fetch user profile from PostgreSQL using Cognito ID
    const response = await fetch(`http://localhost:3001/api/users/${cognitoId}`);

    if (!response.ok) {
      throw new Error("User not found in database");
    }

    const userProfile = await response.json();
    console.log("✅ User Profile from DB:", userProfile);

    return {
      id: userProfile.id,             // PostgreSQL user ID
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      cognitoId: userProfile.cognitoId, // Cognito ID from PostgreSQL
      role: userProfile.role,         // Role from PostgreSQL
      youthMovementId: userProfile.youthMovements?.[0]?.id || null, // Get the first youth movement ID if exists
      youthMovementName: userProfile.youthMovements?.[0]?.name || null, // Get the name of the youth movement
    };
  } catch (error) {
    console.error("❌ Error fetching user profile:", error);
    return null;
  }
};
