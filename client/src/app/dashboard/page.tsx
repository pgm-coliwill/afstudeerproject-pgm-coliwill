"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const cognitoId = "eu-west-1:123e4567-e89b-12d3-a456-426614174000"; 
  const response = await fetch(`http://localhost:3001/api/users/${cognitoId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
};

export default function Page() {
  const { data: userData, error, isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: false, // ✅ Prevent auto-fetching on load
  });

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
