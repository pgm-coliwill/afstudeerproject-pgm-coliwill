"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { signOut } from "aws-amplify/auth";

const fetchUser = async () => {
  // Get the current user's Cognito ID
  const profile = await fetchCurrentProfile();
  const cognitoId = profile?.cognitoId;
  console.log("Cognito ID:", cognitoId);

  if (!cognitoId) {
    throw new Error("Cognito ID is missing.");
  }

  // ✅ Fix: Ensure correct API endpoint
  const response = await fetch(`http://localhost:3001/api/users/${cognitoId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
};

export default function Page() {




  const {
    data: userData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: false, // ✅ Prevent auto-fetching on load
  });

  // ✅ Logout Function
  const handleLogout = async () => {
    try {
      await signOut();
      console.log("✅ User Logged Out");
      window.location.reload(); 
    } catch (error) {
      console.error("❌ Logout failed:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* Fetch User Button */}
      <button
        onClick={() => refetch()} // ✅ Manually trigger fetch
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Test Get User
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout} // ✅ Logout Button
        className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>

      {/* Loading State */}
      {isLoading && <p className="mt-4 text-blue-500">Loading...</p>}

      {/* User Data Display */}
      {userData && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold">User Data:</h2>
          <pre className="text-sm">{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500">Error: {error.message}</p>}
    </div>
  );
}
