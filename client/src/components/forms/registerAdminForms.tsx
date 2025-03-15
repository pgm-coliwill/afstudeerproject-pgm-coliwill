"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "@/styles/forms/RegisterForms.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentUser, UserInfo } from "@/utils/fetchCurrentUser";

const schema = z.object({
  firstName: z.string().min(2, "Voornaam is verplicht"),
  lastName: z.string().min(2, "Familienaam is verplicht"),
});

export default function RegisterAdminForms() {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    data: userData,
    error: userError,
    isLoading,
  } = useQuery<UserInfo | null>({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
  });

  useEffect(() => {
    if (userData) {
      console.log("Authenticated User Info:", userData);
    }
  }, [userData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const createAdmin = async (data: any) => {
    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("API Response:", response);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Fout bij het registreren van de admin.");
      }

      return result;
    } catch (error) {
      console.error("Create Admin Error:", error);
      throw new Error("Er is een probleem opgetreden bij de registratie.");
    }
  };

  const { mutate, isLoading: isMutating } = useMutation({
    mutationFn: createAdmin,
    onSuccess: () => {
      console.log("Admin successfully registered!");
      setSuccessMessage("Admin geregistreerd!");
      setTimeout(() => router.push("/registration/youth-movement"), 2000);
    },
    onError: (err: any) => {
      console.error("Registration failed:", err);
      setError(err.message || "Er is een fout opgetreden bij het registreren.");
    },
  });

  const onSubmit = async (data: any) => {
    console.log("Form submitted!", data);

    if (!userData) {
      setError("Je bent niet ingelogd. Probeer opnieuw.");
      console.error("User not authenticated");
      return;
    }

    const formData = {
      ...data,
      email: userData?.email || "", // Ensure fallback value
      cognitoId: userData?.sub || "", // Ensure fallback value
    };

    console.log("Submitting to API:", formData);
    mutate(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="admin" width={200} height={200} />
      </div>

      {isLoading && <p>Loading user info...</p>}
      {userError && <p className="error">Error fetching user: {userError.message}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Voornaam</label>
        <input type="text" id="firstName" {...register("firstName")} />
        {errors.firstName && <p className="error">{errors.firstName.message}</p>}

        <label htmlFor="lastName">Familienaam</label>
        <input type="text" id="lastName" {...register("lastName")} />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}

        <button type="submit" disabled={isMutating}>
          {isMutating ? "Registreren..." : "Registreer"}
        </button>
      </form>

      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
