"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentYouthMovement } from "@/utils/fetchCurrentYouthMovement";
import { useRouter } from "next/navigation";
import styles from "@/styles/pages/Groups.module.css";

import { X } from "lucide-react";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Group {
  name: string;
  minimumAge: number;
  maximumAge: number;
  youthMovementId?: number;
}

const addGroupsAPI = async (data: { groups: Group[] }) => {
  const response = await fetch(`${base_url}/api/groups`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create groups.");
  }

  return response.json();
};

export default function Groups() {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      groups: [{ name: "", minimumAge: "", maximumAge: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "groups",
  });

  const {
    data: youthMovement,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentYouthMovement"],
    queryFn: fetchCurrentYouthMovement,
  });

  const mutation = useMutation({
    mutationFn: addGroupsAPI,
    onSuccess: () => {
      alert("Groups added successfully!");
      router.push("/registration/youth-movement/invite");
    },
  });

  const onSubmit = (data: {
    groups: { name: string; minimumAge: string; maximumAge: string }[];
  }) => {
    if (!youthMovement) {
      alert("No youth movement found.");
      return;
    }

    const visibleGroups = data.groups.map((group) => ({
      ...group,
      minimumAge: Number(group.minimumAge),
      maximumAge: Number(group.maximumAge),
      youthMovementId: youthMovement.id,
    }));

    const defaultGroup = {
      name: "algemeen",
      minimumAge: 0,
      maximumAge: 99,
      youthMovementId: youthMovement.id,
    };

    mutation.mutate({
      groups: [...visibleGroups, defaultGroup],
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Groepen beheer</h1>

      {isLoading && <p className={styles.message}>Loading youth movement...</p>}
      {error && (
        <p className={`${styles.message} ${styles.error}`}>
          Error fetching youth movement
        </p>
      )}

      {youthMovement && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {fields.map((group, index) => (
            <div key={group.id} className={styles.groupRow}>
              <input
                {...register(`groups.${index}.name`)}
                placeholder="Groep naam"
                className={`${styles.input} ${styles.inputName}`}
              />
              <input
                {...register(`groups.${index}.minimumAge`)}
                placeholder="Min leeftijd"
                type="number"
                className={styles.input}
              />
              <input
                {...register(`groups.${index}.maximumAge`)}
                placeholder="Max leeftijd"
                type="number"
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
            onClick={() => append({ name: "", minimumAge: "", maximumAge: "" })}
            className={styles.buttonAdd}
          >
            ➕ Voeg groep toe
          </button>

          <button type="submit" className={styles.buttonSubmit}>
            Save groepen
          </button>
        </form>
      )}
    </div>
  );
}
