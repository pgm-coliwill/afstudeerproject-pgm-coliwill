"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCurrentUser, UserInfo } from "@/utils/fetchCurrentUser";
import styles from "@/styles/forms/RegisterForms.module.css";

// ✅ Define validation schema for form inputs
const schema = z.object({
  code: z.string().min(6, "Code is invalid"),
  firstName: z.string().min(2, "Voornaam is verplicht"),
  lastName: z.string().min(2, "Familienaam is verplicht"),
});

// ✅ API call to fetch the invitation details
const fetchInvitation = async (code: string) => {
  const response = await fetch(`http://localhost:3001/api/invite/${code}`);
  if (!response.ok) throw new Error("Invalid invitation code.");
  return response.json();
};

// ✅ API call to create a user
const createUser = async (data: {
  code: string;
  cognitoId: string;
  email: string;
  firstName: string;
  lastName: string;
  youthMovementId: number;
}) => {
  const response = await fetch("http://localhost:3001/api/users/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Failed to create user.");
  return response.json();
};

export default function Code() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState("");
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [step, setStep] = useState(1); // Step 1: Validate Code, Step 2: Fill Profile

  // ✅ Fetch the current authenticated user
  const { data: userData} = useQuery<UserInfo | null>({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
  });

  // ✅ Fetch invitation data when code is provided
  const { data: invitation, refetch } = useQuery({
    queryKey: ["invitation", inviteCode],
    queryFn: () => fetchInvitation(inviteCode),
    enabled: false, // Only fetch when manually triggered
  });

  // ✅ Mutation to create a user
  const { mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      console.log("✅ User created successfully");
      alert("Account created successfully!");
      router.push("/dashboard");
    },
    onError: (error: { message: string }) => {
      console.error("❌ Error creating user:", error);
      setInviteError(error.message || "Failed to create user.");
    },
  });

  // ✅ Form setup with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // ✅ Use setValue to dynamically update form values
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ✅ Validate invitation code
  const validateCode = async () => {
    if (!inviteCode) {
      setInviteError("Please enter an invite code.");
      return;
    }

    setInviteError(null);
    refetch();
  };

  // ✅ Proceed to next step if invitation is valid
  useEffect(() => {
    if (invitation) {
      // ✅ Ensure logged-in user's email and role match the invitation
      if (
        userData?.email !== invitation.email ||
        userData?.role !== invitation.role
      ) {
        console.log(userData?.email, invitation.email, userData?.role, invitation.role);
        setInviteError("This invite does not match your account.");
        return;
      }

      setStep(2); // Move to profile creation step
      setValue("code", inviteCode); // ✅ Store the code in the form
    }
  }, [invitation, userData, inviteCode, setValue]);

  // ✅ Handle profile submission
  const onSubmit = (data: { code: string; firstName: string; lastName: string }) => {
    console.log("📌 Form submission attempt detected:", data);

    if (!invitation) {
      setInviteError("No valid invitation found.");
      console.error("❌ No valid invitation found.");
      return;
    }

    console.log("📌 Sending user data:", {
      code: inviteCode, // ✅ Ensure the code is passed
      cognitoId: userData?.sub as string,
      email: userData?.email as string,
      firstName: data.firstName,
      lastName: data.lastName,
      youthMovementId: invitation.youthMovementId,
    });

    mutate({
      code: inviteCode, // ✅ Add the code to the submission
      cognitoId: userData?.sub as string,
      email: userData?.email as string,
      firstName: data.firstName,
      lastName: data.lastName,
      youthMovementId: invitation.youthMovementId,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">Account Setup</h1>

      {/* ✅ Step 1: Validate Code */}
      {step === 1 && (
        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter your invite code"
            className="p-2 border border-gray-300 rounded w-full"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
          />
          <button
            type="button"
            onClick={validateCode}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Validate Code
          </button>

          {inviteError && <p className="text-red-500 mt-2">{inviteError}</p>}
        </div>
      )}

      {/* ✅ Step 2: Profile Form */}
      {step === 2 && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          {/* Hidden Input to Retain Code */}
          <input
            type="hidden"
            {...register("code")}
            value={inviteCode}
          />

          <div className={styles.flexForm}>
            <div>
              <label htmlFor="firstName">Voornaam</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.firstName && (
                <p className="text-red-500 mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName">Familienaam</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.lastName && (
                <p className="text-red-500 mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <input type="hidden" id="email" value={userData?.email} />
          <input type="hidden" id="cognitoId" value={userData?.sub} />

          <button
            type="submit"
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
          >
            Maak account
          </button>
        </form>
      )}
    </div>
  );
}
