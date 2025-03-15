"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentYouthMovement } from "@/utils/fetchCurrentYouthMovement";
import { useRouter } from "next/navigation";

const addGroupsAPI = async (data: any) => {

 
  const response = await fetch("http://localhost:3001/api/groups", {
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

  const { data: youthMovement, isLoading, error } = useQuery({
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

  const onSubmit = (data: any) => {
    if (!youthMovement) {
      alert("No youth movement found.");
      return;
    }

    mutation.mutate({
      groups: data.groups.map((group: any) => ({
        ...group,
        minimumAge: Number(group.minimumAge),
        maximumAge: Number(group.maximumAge),
        youthMovementId: youthMovement.id, // ✅ Attach youthMovementId
      })),
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Manage Groups</h1>

      {isLoading && <p>Loading youth movement...</p>}
      {error && <p className="text-red-500">Error fetching youth movement</p>}

      {youthMovement && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {fields.map((group, index) => (
            <div key={group.id} className="flex space-x-2">
              <input
                {...register(`groups.${index}.name`)}
                placeholder="Group Name"
                className="border p-2 w-1/3"
              />
              <input
                {...register(`groups.${index}.minimumAge`)}
                placeholder="Min Age"
                type="number"
                className="border p-2 w-1/4"
              />
              <input
                {...register(`groups.${index}.maximumAge`)}
                placeholder="Max Age"
                type="number"
                className="border p-2 w-1/4"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                ❌
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ name: "", minimumAge: "", maximumAge: "" })}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            ➕ Add Group
          </button>

          <button
            type="submit"
            className="block bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Save Groups
          </button>
        </form>
      )}
    </div>
  );
}
