"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { useRouter } from "next/navigation";
import styles from "@/styles/pages/LeaderGroups.module.css";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

type Group = {
  id: number;
  name: string;
};

export default function LeaderGroups() {
  const router = useRouter();
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);

  const { data: profileData, isLoading: isProfileLoading } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  const { data: groups, isLoading: isGroupsLoading } = useQuery({
    queryKey: ["groups", profileData?.youthMovementId],
    queryFn: async () => {
      const response = await fetch(
        `${base_url}/api/groups/youthMovement/${profileData?.youthMovementId}`
      );
      if (!response.ok) throw new Error("Failed to fetch groups");
      return response.json();
    },
    enabled: !!profileData?.youthMovementId,
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await fetch(`${base_url}/api/leadersGroups`, {
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

  const handleCheckboxChange = (groupId: number) => {
    setSelectedGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  };

  if (isProfileLoading || isGroupsLoading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Selecteer groepen waarvan je leider bent</h1>

      {groups && groups.length > 0 ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
          className={styles.form}
        >
          {groups.map((group: Group) => (
            <div key={group.id} className={styles.formItem}>
              <input
                type="checkbox"
                id={`group-${group.id}`}
                checked={selectedGroups.includes(group.id)}
                onChange={() => handleCheckboxChange(group.id)}
                className={styles.checkbox}
              />
              <label htmlFor={`group-${group.id}`}>{group.name}</label>
            </div>
          ))}

          <button type="submit" className={styles.button}>
            Save
          </button>
        </form>
      ) : (
        <p>Geen groepen</p>
      )}
    </div>
  );
}
