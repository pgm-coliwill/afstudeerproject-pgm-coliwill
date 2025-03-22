import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export type YouthMovementInfo = {
  id: number;
  name: string;
  description?: string;
  city: string;
  postalCode: string;
  street: string;
  houseNumber: string;
  adminId: number;
};

export const fetchCurrentYouthMovement =
  async (): Promise<YouthMovementInfo | null> => {
    try {
      console.log("🟡 Running fetchCurrentYouthMovement...");

      // ✅ Step 1: Get current user's profile
      const profile = await fetchCurrentProfile();
      if (!profile) {
        console.error("❌ User profile not found.");
        return null;
      }

      const userId = profile.id;
      console.log("🟡 Current User ID:", userId);

      // ✅ Step 2: Fetch youth movement by user ID
      const response = await fetch(
        `${baseUrl}/api/youthMovements/user/${userId}`
      );

      if (!response.ok) {
        console.error("❌ Failed to fetch youth movement:", response.status);
        return null;
      }

      const youthMovement = await response.json();
      console.log("🟢 Youth Movement Data:", youthMovement);

      return youthMovement;
    } catch (error) {
      console.error("❌ Error fetching youth movement:", error);
      return null;
    }
  };
