"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { useRouter } from "next/navigation";

type Group = {
  id: number;
  name: string;
};

export default function LeaderGroups() {
  const router = useRouter();
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);

  // ✅ Fetch leader's profile
  const { data: profileData, isLoading: isProfileLoading } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  // ✅ Fetch groups from the leader's youth movement
  const { data: groups, isLoading: isGroupsLoading } = useQuery({
    queryKey: ["groups", profileData?.youthMovementId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3001/api/groups/youthMovement/${profileData?.youthMovementId}`
      );
      if (!response.ok) throw new Error("Failed to fetch groups");
      return response.json();
    },
    enabled: !!profileData?.youthMovementId, // ✅ Fetch only when we have youthMovementId
  });

  // ✅ Mutation to submit selected groups
  const { mutate} = useMutation({
    mutationFn: async () => {
      const response = await fetch("http://localhost:3001/api/leadersGroups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: profileData?.id,
          groupIds: selectedGroups,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to assign leader to groups.");
      }

      return response.json();
    },
    onSuccess: () => {
      alert("Groups successfully assigned!");
      router.push("/dashboard");
    },
  });

  // ✅ Handle checkbox selection
  const handleCheckboxChange = (groupId: number) => {
    setSelectedGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  // ✅ Loading states
  if (isProfileLoading || isGroupsLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Select Groups to Lead</h1>

      {groups && groups.length > 0 ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
          className="mt-4 space-y-2"
        >
          {groups.map((group: Group) => (
            <div key={group.id} className="flex items-center">
              <input
                type="checkbox"
                id={`group-${group.id}`}
                checked={selectedGroups.includes(group.id)}
                onChange={() => handleCheckboxChange(group.id)}
                className="mr-2"
              />
              <label htmlFor={`group-${group.id}`}>{group.name}</label>
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </form>
      ) : (
        <p>No groups available.</p>
      )}
    </div>
  );
}
