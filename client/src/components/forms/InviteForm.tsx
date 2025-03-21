"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCurrentYouthMovement } from "@/utils/fetchCurrentYouthMovement";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

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
      console.error("❌ No youth movement data available.");
      return;
    }

    console.log("📌 Submitting Invite Data:", {
      ...data,
      role,
      youthMovementId: youthMovement.id, 
    });

    mutation.mutate({
      ...data,
      role,
      youthMovementId: youthMovement.id,
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">Invite {role === "leider" ? "Leaders" : "Parents"}</h2>

      {/* ✅ Show loading state */}
      {isLoading && <p>Loading youth movement...</p>}
      {error && <p className="text-red-500">Error fetching youth movement</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex space-x-2">
            <input
              {...register(`emails.${index}`)}
              type="email"
              placeholder="Enter email"
              className="border p-2 w-2/3"
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
          onClick={() => append("")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          ➕ Add Email
        </button>

        <button type="submit" className="block bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Send Invites
        </button>
      </form>
    </div>
  );
}
