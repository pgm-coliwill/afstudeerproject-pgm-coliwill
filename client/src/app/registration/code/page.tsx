"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCurrentUser, UserInfo } from "@/utils/fetchCurrentUser";
import styles from "@/styles/pages/Code.module.css";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const schema = z.object({
  code: z.string().min(6, "Code is invalid"),
  firstName: z.string().min(2, "Voornaam is verplicht"),
  lastName: z.string().min(2, "Familienaam is verplicht"),
});

const fetchInvitation = async (code: string) => {
  const response = await fetch(`${base_url}/api/invite/${code}`);
  if (!response.ok) throw new Error("Invalid invitation code.");
  return response.json();
};

const createUser = async (data: {
  code: string;
  cognitoId: string;
  email: string;
  firstName: string;
  lastName: string;
  youthMovementId: number;
}) => {
  const response = await fetch(`${base_url}/api/users/create`, {
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
  const [step, setStep] = useState(1);

  const { data: userData } = useQuery<UserInfo | null>({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
  });

  const { data: invitation, refetch } = useQuery({
    queryKey: ["invitation", inviteCode],
    queryFn: () => fetchInvitation(inviteCode),
    enabled: false,
  });

  const { mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      alert("Account created successfully!");
      if (userData?.role === "ouder")
        router.push("/registration/parent-groups");
      else router.push("/registration/leader-groups");
    },
    onError: (error: { message: string }) => {
      setInviteError(error.message || "Failed to create user.");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const validateCode = async () => {
    if (!inviteCode) {
      setInviteError("Please enter an invite code.");
      return;
    }
    setInviteError(null);
    refetch();
  };

  useEffect(() => {
    if (invitation) {
      if (
        userData?.email !== invitation.email ||
        userData?.role !== invitation.role
      ) {
        setInviteError("This invite does not match your account.");
        return;
      }

      setStep(2);
      setValue("code", inviteCode);
    }
  }, [invitation, userData, inviteCode, setValue]);

  const onSubmit = (data: {
    code: string;
    firstName: string;
    lastName: string;
  }) => {
    if (!invitation) {
      setInviteError("No valid invitation found.");
      return;
    }

    mutate({
      code: inviteCode,
      cognitoId: userData?.sub as string,
      email: userData?.email as string,
      firstName: data.firstName,
      lastName: data.lastName,
      youthMovementId: invitation.youthMovementId,
    });
  };

  return (
    <div className={styles.container}>
      {step === 1 && (
        <>
          <h1 className={styles.title}>
            Vul hier de code van je jeugdbeweging in
          </h1>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter your invite code"
              className={styles.input}
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
            <button
              type="button"
              onClick={validateCode}
              className={styles.button}
            >
              Controleer code
            </button>

            {inviteError && <p className={styles.error}>{inviteError}</p>}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className={styles.title}>
            Vul hier je gegevens in om je account aan te maken
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.inputGroup}>
            <input type="hidden" {...register("code")} value={inviteCode} />

            <div className={styles.flexForm}>
              <div>
                <label htmlFor="firstName">Voornaam</label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  className={styles.input}
                />
                {errors.firstName && (
                  <p className={styles.error}>{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName">Familienaam</label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  className={styles.input}
                />
                {errors.lastName && (
                  <p className={styles.error}>{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <input type="hidden" id="email" value={userData?.email} />
            <input type="hidden" id="cognitoId" value={userData?.sub} />

            <button
              type="submit"
              className={`${styles.button} ${styles.buttonSuccess}`}
            >
              Maak account
            </button>
          </form>
        </>
      )}
    </div>
  );
}
