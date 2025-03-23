"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { useRouter } from "next/navigation";
import styles from "@/styles/pages/ParentGroups.module.css";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const schema = z.object({
  children: z
    .array(
      z.object({
        childName: z.string().min(2, "Naam van het kind is verplicht"),
        groupId: z.coerce.number().min(1, "Selecteer een groep"),
        relation: z.enum(["moeder", "vader", "voogd", "stiefouder"], {
          errorMap: () => ({ message: "Selecteer een relatie" }),
        }),
      })
    )
    .min(1, "Voeg minstens één kind toe"),
});

type FormData = {
  children: {
    childName: string;
    groupId: number;
    relation: "moeder" | "vader" | "voogd" | "stiefouder";
  }[];
};

export default function ParentGroups() {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { data: profileData, isLoading: isProfileLoading } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  const { data: groups, isLoading: isGroupsLoading } = useQuery({
    queryKey: ["groups", profileData?.youthMovementId],
    queryFn: async () => {
      if (!profileData?.youthMovementId) return [];
      const response = await fetch(
        `${base_url}/api/groups/youthMovement/${profileData.youthMovementId}`
      );
      if (!response.ok) throw new Error("Failed to fetch groups");
      return response.json();
    },
    enabled: !!profileData?.youthMovementId,
  });

  const { mutate } = useMutation({
    mutationFn: async (data: FormData) => {
      if (!profileData) throw new Error("Parent profile not found.");
      const response = await fetch(`${base_url}/api/parentChild`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          data.children.map((child) => ({
            parentId: profileData.id,
            childName: child.childName,
            groupId: child.groupId,
            relation: child.relation,
          }))
        ),
      });
      if (!response.ok) throw new Error("Failed to add children to groups.");
      return response.json();
    },
    onSuccess: () => {
      setSuccessMessage("Kinderen succesvol toegevoegd aan groepen!");
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { children: [{ childName: "", groupId: 0, relation: "moeder" }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "children",
  });

  if (isProfileLoading || isGroupsLoading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Voeg je kinderen toe aan een groep</h1>

      <form onSubmit={handleSubmit((data) => mutate(data))} className={styles.form}>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.field}>
            <div>
              <label className={styles.label} htmlFor={`children.${index}.childName`}>
                Naam van het kind
              </label>
              <input
                type="text"
                {...register(`children.${index}.childName`)}
                className={styles.input}
              />
              {errors.children?.[index]?.childName && (
                <p className={styles.error}>{errors.children[index]?.childName?.message}</p>
              )}
            </div>

            <div>
              <label className={styles.label} htmlFor={`children.${index}.groupId`}>
                Selecteer een groep
              </label>
              <select
                {...register(`children.${index}.groupId`, { valueAsNumber: true })}
                className={styles.select}
              >
                <option value={0}>-- Kies een groep --</option>
                {groups?.map((group: { id: number; name: string }) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
              {errors.children?.[index]?.groupId && (
                <p className={styles.error}>{errors.children[index]?.groupId?.message}</p>
              )}
            </div>

            <div>
              <label className={styles.label} htmlFor={`children.${index}.relation`}>
                Jouw relatie met het kind
              </label>
              <select
                {...register(`children.${index}.relation`)}
                className={styles.select}
              >
                <option value="moeder">Moeder</option>
                <option value="vader">Vader</option>
                <option value="voogd">Voogd</option>
                <option value="stiefouder">Stiefouder</option>
              </select>
              {errors.children?.[index]?.relation && (
                <p className={styles.error}>{errors.children[index]?.relation?.message}</p>
              )}
            </div>

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className={styles.remove}
              >
                ❌ Verwijder kind
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ childName: "", groupId: 0, relation: "moeder" })}
          className={styles.buttonAdd}
        >
          ➕ Voeg kind toe
        </button>

        <div className={styles.actions}>
          <button type="submit" className={`${styles.button} ${styles.save}`}>
            Opslaan
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.next}`}
            onClick={() => router.push("/dashboard")}
          >
            Verder
          </button>
        </div>
      </form>

      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </div>
  );
}
