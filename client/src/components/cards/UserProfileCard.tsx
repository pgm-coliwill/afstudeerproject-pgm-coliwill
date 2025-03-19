"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { signOut } from "aws-amplify/auth";

export default function UserProfileCard() {

  const {
    data: userData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchCurrentProfile,
    refetchOnWindowFocus: false, 
  });

  console.log("📌 User Data:", userData);

  // ✅ Logout Function
  const handleLogout = async () => {
    try {
      await signOut();
      window.location.reload();
    } catch (error) {
      console.error("❌ Logout failed:", error);
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-xl font-bold text-center">User Profile</h1>

      {/* ✅ Loading State */}
      {isLoading && <p className="mt-4 text-blue-500">Loading user data...</p>}

      {/* ✅ Display User Data */}
      {userData && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold">User Information:</h2>
          <pre className="text-sm">{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

      {/* ✅ Error Message */}
      {error && <p className="mt-4 text-red-500">Error: {error.message}</p>}

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
      >
        Logout
      </button>
    </div>
  );
}
