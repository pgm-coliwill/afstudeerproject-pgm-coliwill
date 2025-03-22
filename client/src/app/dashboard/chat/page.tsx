"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { fetchUsersByYouthMovement } from "@/utils/fetchUsersByYouthMovement";
import ChatBox from "@/components/chat/ChatBox";
import { useState } from "react";

export default function MessagingPage() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const { data: profile } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  const currentUserId = profile?.id ?? null;

  const { data: users } = useQuery({
    queryKey: ["users", profile?.youthMovementId],
    queryFn: () => fetchUsersByYouthMovement(profile?.youthMovementId as number),
    enabled: !!profile?.youthMovementId,
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Stuur een bericht naar:</h2>

      {/* 🧑‍🤝‍🧑 User List */}
      <div className="mb-6 flex flex-col gap-2">
        {users?.map((entry: any) => (
          entry.user.id !== currentUserId && (
            <button
              key={entry.user.id}
              onClick={() => setSelectedUserId(entry.user.id)}
              className={`border rounded p-2 transition ${
                selectedUserId === entry.user.id ? "bg-blue-200" : "hover:bg-blue-100"
              }`}
            >
              {entry.user.firstName} {entry.user.lastName} – {entry.role}
            </button>
          )
        ))}
      </div>

      {/* 💬 ChatBox */}
      {selectedUserId !== null && currentUserId !== null && (
        <ChatBox currentUserId={currentUserId} otherUserId={selectedUserId} />
      )}
    </div>
  );
}
