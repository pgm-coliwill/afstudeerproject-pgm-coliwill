// src/components/events/CreateEvent.tsx
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import styles from "@/styles/events/CreateEvent.module.css";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

type FormData = {
  name: string;
  body: string;
  eventDate: string;
  location?: string;
  image?: FileList;
  groupId?: string;
  signUp: boolean;
  volunteer: boolean;
  maxVolunteers?: number;
  type?: string;
};

export default function CreateEvent() {
  const [showModal, setShowModal] = useState(false);

  const { data: profile } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  const { data: groups } = useQuery({
    queryKey: ["groups", profile?.youthMovementId],
    queryFn: async () => {
      const res = await fetch(`${base_url}/api/groups/youthMovement/${profile?.youthMovementId}`);
      return res.json();
    },
    enabled: !!profile?.youthMovementId,
  });

  const { register, handleSubmit, reset, watch } = useForm<FormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("body", data.body);
      formData.append("eventDate", data.eventDate);
      if (data.type) formData.append("type", data.type);
      if (data.location) formData.append("location", data.location);
      if (data.groupId) formData.append("groupId", data.groupId);
      formData.append("signUp", String(data.signUp));
      formData.append("volunteer", String(data.volunteer));
      if (data.volunteer && data.maxVolunteers)
        formData.append("maxVolunteers", String(data.maxVolunteers));
      if (data.image && data.image.length > 0)
        formData.append("image", data.image[0]);

      const res = await fetch(`${base_url}/api/events`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Event creation failed.");
    },
    onSuccess: () => {
      reset();
      setShowModal(false);
    },
  });

  const volunteerEnabled = watch("volunteer");

  if (profile?.role !== "admin" && profile?.role !== "leider") return null;

  return (
    <div className={styles.container}>
      <button className={styles.openButton} onClick={() => setShowModal(true)}>
        Evenement aanmaken
      </button>

      {showModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h2>Nieuw Evenement</h2>

            <form onSubmit={handleSubmit((data) => mutate(data))} className={styles.form}>
              
              <input {...register("name")} placeholder="Titel" required />
              <textarea {...register("body")} placeholder="Beschrijving" required />
              <input type="datetime-local" {...register("eventDate")} required />
              <input {...register("location")} placeholder="Locatie" />
              <input type="file" {...register("image")} accept="image/*" />
              <input {...register("type")} placeholder="Type" />

              <select {...register("groupId")}>
                <option value="">-- Geen groep --</option>
                {groups?.map((group: any) => (
                  <option key={group.id} value={String(group.id)}>
                    {group.name}
                  </option>
                ))}
              </select>

              <label>
                <input type="checkbox" {...register("signUp")} />
                Inschrijven mogelijk
              </label>

              <label>
                <input type="checkbox" {...register("volunteer")} />
                Vrijwilligers nodig?
              </label>

              {volunteerEnabled && (
                <input
                  type="number"
                  {...register("maxVolunteers")}
                  placeholder="Aantal vrijwilligers"
                  min={1}
                />
              )}

              <div className={styles.buttonGroup}>
                <button type="submit" disabled={isPending}>
                  {isPending ? "Evenement wordt aangemaakt..." : "Evenement aanmaken"}
                </button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Annuleren
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
