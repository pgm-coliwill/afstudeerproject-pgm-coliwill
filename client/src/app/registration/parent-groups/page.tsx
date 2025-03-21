"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { useRouter } from "next/navigation";


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
    groupId: number; // ✅ Now stored as a number
    relation: "moeder" | "vader" | "voogd" | "stiefouder";
  }[];
};

export default function ParentGroups() {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // ✅ Fetch parent profile (includes youth movement ID)
  const { data: profileData, isLoading: isProfileLoading } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  // ✅ Fetch groups from the youth movement
  const { data: groups, isLoading: isGroupsLoading } = useQuery({
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

  // ✅ Mutation to submit the form
  const { mutate} = useMutation({
    mutationFn: async (data: FormData) => {
      if (!profileData) {
        throw new Error("Parent profile not found.");
      }

      const response = await fetch("http://localhost:3001/api/parentChild", {
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

      if (!response.ok) {
        throw new Error("Failed to add children to groups.");
      }

      return response.json();
    },
    onSuccess: () => {
      setSuccessMessage("Kinderen succesvol toegevoegd aan groepen!");
    },
  });

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { children: [{ childName: "", groupId: 0, relation: "moeder" }] }, // ✅ groupId starts as number
  });

  // ✅ Dynamic Fields (for adding/removing children)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "children",
  });

  // ✅ Loading states
  if (isProfileLoading || isGroupsLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Voeg je kinderen toe aan een groep</h1>

      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="mt-6 space-y-4"
      >
        {fields.map((field, index) => (
          <div key={field.id} className="">
            {/* Child Name Input */}
            <div>
              <label htmlFor={`children.${index}.childName`} className="block font-semibold">
                Naam van het kind
              </label>
              <input
                type="text"
                {...register(`children.${index}.childName`)}
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.children?.[index]?.childName && (
                <p className="text-red-500 mt-1">{errors.children[index]?.childName?.message}</p>
              )}
            </div>

            {/* Select Group */}
            <div className="mt-2">
              <label htmlFor={`children.${index}.groupId`} className="block font-semibold">
                Selecteer een groep
              </label>
              <select
                {...register(`children.${index}.groupId`, { valueAsNumber: true })} // ✅ Ensure number input
                className="p-2 border border-gray-300 rounded w-full"
              >
                <option value={0}>-- Kies een groep --</option>
                {groups?.map((group: { id: number; name: string }) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
              {errors.children?.[index]?.groupId && (
                <p className="text-red-500 mt-1">{errors.children[index]?.groupId?.message}</p>
              )}
            </div>

            {/* Select Relation */}
            <div className="mt-2">
              <label htmlFor={`children.${index}.relation`} className="block font-semibold">
                Jouw relatie met het kind
              </label>
              <select
                {...register(`children.${index}.relation`)}
                className="p-2 border border-gray-300 rounded w-full"
              >
                <option value="moeder">Moeder</option>
                <option value="vader">Vader</option>
                <option value="voogd">Voogd</option>
                <option value="stiefouder">Stiefouder</option>
              </select>
              {errors.children?.[index]?.relation && (
                <p className="text-red-500 mt-1">{errors.children[index]?.relation?.message}</p>
              )}
            </div>

            {/* Remove Child Button */}
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className=""
              >
                ❌ Verwijder kind
              </button>
            )}
          </div>
        ))}

        {/* Add Child Button */}
        <button
          type="button"
          onClick={() => append({ childName: "", groupId: 0, relation: "moeder" })} 
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          ➕ Voeg kind toe
        </button>

        {/* Submission Buttons */}
        <div className="flex space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded flex-1"
          >
           Opslaan
          </button>
          <button
            type="button"
            className="bg-purple-500 text-white px-4 py-2 rounded flex-1"
            onClick={() => router.push("/dashboard")}
          >
            Verder
          </button>
        </div>
      </form>

      {/* ✅ Success Message */}
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
}
