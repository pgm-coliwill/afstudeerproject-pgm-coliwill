"use client";

import React from "react";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import styles from "@/styles/events/AllEvents.module.css";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AllEvents() {
  const { data: profile } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  const { data: events, refetch } = useQuery({
    queryKey: ["events", profile?.youthMovementId],
    queryFn: async () => {
      const res = await fetch(`${base_url}/api/events/youthMovement/${profile?.youthMovementId}`);
      if (!res.ok) throw new Error("Fout bij ophalen van events");
      return res.json();
    },
    enabled: !!profile?.youthMovementId,
  });

  const attendMutation = useMutation({
    mutationFn: async (eventId: number) => {
      const res = await fetch(`${base_url}/api/events/${eventId}/attend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: profile?.id }),
      });
      if (!res.ok) throw new Error("Fout bij inschrijven");
    },
    onSuccess: () => refetch(),
  });

  const volunteerMutation = useMutation({
    mutationFn: async (eventId: number) => {
      const res = await fetch(`${base_url}/api/events/${eventId}/volunteer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: profile?.id }),
      });
      if (!res.ok) throw new Error("Fout bij aanmelden als vrijwilliger");
    },
    onSuccess: () => refetch(),
  });

  return (
    <div className={styles.wrapper}>
      {events?.map((event: any) => {
        const isAttending = event.attendees.some((a: any) => a.userId === profile?.id);
        const isVolunteering = event.volunteers.some((v: any) => v.userId === profile?.id);
        const volunteerFull = event.volunteers.length >= event.maxVolunteers;

        return (
          <div key={event.id} className={styles.card}>
            <h3>{event.name}</h3>
            <p>{event.body}</p>
            <p><strong>Locatie:</strong> {event.location || "Onbekend"}</p>
            <p><strong>Datum:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>

            {event.image && (
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt="Event"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
            )}

            <div className={styles.buttons}>
              {event.signUp && (
                <button
                  onClick={() => attendMutation.mutate(event.id)}
                  disabled={isAttending}
                  className={styles.attendBtn}
                >
                  {isAttending ? "Ingeschreven" : "Inschrijven"}
                </button>
              )}

              {event.volunteer && (
                <button
                  onClick={() => volunteerMutation.mutate(event.id)}
                  disabled={isVolunteering || volunteerFull}
                  className={styles.volunteerBtn}
                >
                  {isVolunteering
                    ? "Vrijwilliger"
                    : volunteerFull
                    ? "Volzet"
                    : "Aanmelden als vrijwilliger"}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
