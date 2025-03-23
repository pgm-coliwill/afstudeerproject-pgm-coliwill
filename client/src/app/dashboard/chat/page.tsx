"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { fetchUsersByYouthMovement } from "@/utils/fetchUsersByYouthMovement";
import ChatBox from "@/components/chat/ChatBox";
import { useState } from "react";
import styles from "@/styles/pages/Chat.module.css";

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

  const selectedUser = users?.find((u: any) => u.user.id === selectedUserId);

  return (
    <div className={styles.container}>
     
      {selectedUserId === null ? (
        <div className={styles.userList}>
          <h2>Stuur een bericht naar:</h2>
          {users?.map((entry: any) =>
            entry.user.id !== currentUserId ? (
              <button
                key={entry.user.id}
                onClick={() => setSelectedUserId(entry.user.id)}
                className={`${styles.userButton} ${
                  selectedUserId === entry.user.id ? styles.active : ""
                }`}
              >
                {entry.user.firstName} {entry.user.lastName} – {entry.role}
              </button>
            ) : null
          )}
        </div>
      ) : (
        <div className={styles.chatBoxWrapper}>
          <button onClick={() => setSelectedUserId(null)}>
            ← Terug naar gebruikerslijst
          </button>
          <ChatBox currentUserId={currentUserId!} otherUserId={selectedUserId} />
        </div>
      )}
    </div>
  );
}
