import { getCurrentUser } from "aws-amplify/auth";

export type ProfileInfo = {
  id: number;
  firstName: string;
  lastName: string;
  cognitoId: string; 
  role: string; 
  youthMovementId: number | null;
  youthMovementName: string | null; 
};

export const fetchCurrentProfile = async (): Promise<ProfileInfo | null> => {
  try {
    console.log("🔄 Fetching current profile...");


    const user = await getCurrentUser();

    if (!user || !user.username) {
      throw new Error("User not authenticated");
    }

    const cognitoId = user.username;

    console.log("✅ Cognito ID:", cognitoId);

    const response = await fetch(`http://localhost:3001/api/users/${cognitoId}`);

    if (!response.ok) {
      throw new Error("User not found in database");
    }

    const userProfile = await response.json();
    console.log("✅ User Profile from DB:", userProfile);

    return {
      id: userProfile.id,            
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      cognitoId: userProfile.cognitoId, 
      role: userProfile.role,        
      youthMovementId: userProfile.youthMovementId || null, 
      youthMovementName: userProfile.youthMovementName || null,
    };
  } catch (error) {
    console.error("❌ Error fetching user profile:", error);
    return null;
  }
};

