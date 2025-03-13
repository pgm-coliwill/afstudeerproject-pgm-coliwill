"use client";

import React, { useState } from "react";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const testGetUser = async () => {
    const cognitoId = "eu-west-1:123e4567-e89b-12d3-a456-426614174000"; // Replace with a valid Cognito ID
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/${cognitoId}`
      );
      if (!response.ok) throw new Error("Failed to fetch user");

      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button
        onClick={testGetUser}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Test Get User
      </button>

      {userData && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold">User Data:</h2>
          <pre className="text-sm">{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

      {error && <p className="mt-4 text-red-500">Error: {error}</p>}
    </div>
  );
}
