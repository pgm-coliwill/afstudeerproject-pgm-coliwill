"use client";

import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentProfile } from "@/utils/fetchCurrentProfile";
import { useEffect } from "react";
import styles from "@/styles/pages/Settings.module.css";
import { signOut } from "aws-amplify/auth";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function SettingsPage() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm<FormValues>();

  useEffect(() => {
    if (profile) {
      reset({
        firstName: profile.firstName,
        lastName: profile.lastName,
      });
    }
  }, [profile, reset]);

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await fetch(`${base_url}/api/users/${profile?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Update failed");
      return res.json();
    },
    onSuccess: () => {
      alert("✅ Gegevens succesvol opgeslagen!");
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = "/"; 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoading) return <p className={styles.loading}>⏳ Laden...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Account Instellingen</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <label>Voornaam</label>
          <input {...register("firstName", { required: true })} />
        </div>

        <div className={styles.field}>
          <label>Achternaam</label>
          <input {...register("lastName", { required: true })} />
        </div>

        <button
          type="submit"
          disabled={!isDirty || isSubmitting}
          className={styles.button}
        >
          {isSubmitting ? "Opslaan..." : "Opslaan"}
        </button>
      </form>

      <button className={styles.logoutButton} onClick={handleLogout}>
        Log uit
      </button>
    </div>
  );
}
