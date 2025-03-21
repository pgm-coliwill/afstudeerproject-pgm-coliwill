"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import styles from "@/styles/cards/CreatePost.module.css";

// ✅ Define schema for validation
const schema = z.object({
  title: z.string().min(3, "Titel moet minstens 3 karakters bevatten"),
  body: z.string().min(10, "Bericht moet minstens 10 karakters bevatten"),
  groupId: z.string().optional(),
  image: z.instanceof(FileList).optional(),
});

// ✅ Define form data type
type FormData = {
  title: string;
  body: string;
  groupId?: string;
  image?: FileList;
};

export default function CreatePost() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ✅ Fetch user profile
  const { data: profileData } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  // ✅ Fetch groups from youth movement
  const { data: groups } = useQuery({
    queryKey: ["groups", profileData?.youthMovementId],
    queryFn: async () => {
      if (!profileData?.youthMovementId) return [];
      const response = await fetch(
        `http://localhost:3001/api/groups/youthMovement/${profileData.youthMovementId}`
      );
      if (!response.ok) throw new Error("Failed to fetch groups");
      return response.json();
    },
    enabled: !!profileData?.youthMovementId,
  });

  // ✅ Mutation to submit post
  const { mutate} = useMutation({
    mutationFn: async (data: FormData) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("body", data.body);
      if (data.groupId) formData.append("groupId", data.groupId);
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }
      formData.append("userId", String(profileData?.id));

      const response = await fetch("http://localhost:3001/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create post.");
      }

      return response.json();
    },
    onSuccess: () => {
      setSuccessMessage("Post succesvol aangemaakt!");
      setErrorMessage(null);
      setShowModal(false); // Close modal
    },
    onError: () => {
      setErrorMessage("Fout bij het aanmaken van de post.");
      setSuccessMessage(null);
    },
  });

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className={styles.container}>
      {/* Button to Open Modal */}
      <button className={styles.openButton} onClick={() => setShowModal(true)}>
        Maak post
      </button>

      {/* Modal Overlay */}
      {showModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h1 className={styles.title}>Nieuwe Post</h1>

            <form onSubmit={handleSubmit((data) => mutate(data))} className={styles.form}>
              {/* Title Input */}
              <div className={styles.formGroup}>
                <label htmlFor="title">Titel</label>
                <input type="text" id="title" {...register("title")} />
                {errors.title && <p className={styles.error}>{errors.title.message}</p>}
              </div>

              {/* Body Input */}
              <div className={styles.formGroup}>
                <label htmlFor="body">Bericht</label>
                <textarea id="body" {...register("body")} />
                {errors.body && <p className={styles.error}>{errors.body.message}</p>}
              </div>

              {/* Select Group (Optional) */}
              <div className={styles.formGroup}>
                <label htmlFor="groupId">Kies een groep (optioneel)</label>
                <select id="groupId" {...register("groupId")}>
                  <option value="">-- Geen groep --</option>
                  {groups?.map((group: { id: number; name: string }) => (
                    <option key={group.id} value={String(group.id)}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image Upload */}
              <div className={styles.formGroup}>
                <label htmlFor="image">Afbeelding uploaden (optioneel)</label>
                <input type="file" id="image" {...register("image")} />
              </div>

              {/* Buttons */}
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton} >
                  Post aanmaken
                </button>
                <button type="button" className={styles.cancelButton} onClick={() => setShowModal(false)}>
                  Annuleren
                </button>
              </div>
            </form>

            {/* Success/Error Messages */}
            {successMessage && <p className={styles.success}>{successMessage}</p>}
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
