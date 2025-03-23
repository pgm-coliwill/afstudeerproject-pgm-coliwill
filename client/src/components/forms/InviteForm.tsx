"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCurrentYouthMovement } from "@/utils/fetchCurrentYouthMovement";
import styles from "@/styles/forms/InviteForm.module.css";
import { X } from "lucide-react";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

interface InviteData {
  emails: string[];
  role: "ouder" | "leider";
  youthMovementId: number;
}

const sendInvites = async (data: InviteData) => {
  const response = await fetch(`${base_url}/api/invite`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send invitations.");
  }

  return response.json();
};

export default function InviteForm({ role }: { role: "ouder" | "leider" }) {
  const { register, handleSubmit, control } = useForm({
    defaultValues: { emails: [""], role, youthMovementId: 0 },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "emails" as never,
  });

  const { data: youthMovement, isLoading, error } = useQuery({
    queryKey: ["currentYouthMovement"],
    queryFn: fetchCurrentYouthMovement,
  });

  const mutation = useMutation({
    mutationFn: sendInvites,
    onSuccess: () => {
      alert("Invites sent successfully!");
    },
  });

  const onSubmit = (data: InviteData) => {
    if (!youthMovement) {
      alert("No youth movement found!");
      return;
    }

    mutation.mutate({
      ...data,
      role,
      youthMovementId: youthMovement.id,
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Invite {role === "leider" ? "leiders" : "ouders"}
      </h2>

      {isLoading && <p className={styles.message}>Loading youth movement...</p>}
      {error && (
        <p className={`${styles.message} ${styles.error}`}>
          Error fetching youth movement
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.emailRow}>
            <input
              {...register(`emails.${index}`)}
              type="email"
              placeholder="Enter email"
              className={styles.input}
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className={styles.buttonRemove}
            >
              <X size={24} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append("")}
          className={styles.buttonAdd}
        >
          ➕ Voeg email toe
        </button>

        <button type="submit" className={styles.buttonSubmit}>
          Stuur uitnodigingen
        </button>
      </form>
    </div>
  );
}
