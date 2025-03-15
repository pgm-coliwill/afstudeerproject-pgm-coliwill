"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "@/styles/forms/RegisterForms.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchCurrentProfile, ProfileInfo } from "@/utils/fetchCurrentProfile";
import { fetchAuthSession } from "aws-amplify/auth";

const schema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  description: z.string().optional(),
  city: z.string().min(2, "Stad is verplicht"),
  postalCode: z.string().min(4, "Postcode moet 4 cijfers bevatten"),
  street: z.string().min(2, "Straatnaam is verplicht"),
  houseNumber: z.string().min(1, "Huisnummer is verplicht"),
});

export default function RegisterJeugdbewegingForms() {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // ✅ Fetch user profile (includes PostgreSQL `id`)
  const {
    data: profileData,
    error: profileError,
    isLoading,
  } = useQuery<ProfileInfo | null>({
    queryKey: ["currentProfile"],
    queryFn: fetchCurrentProfile,
  });

  useEffect(() => {
    if (profileData) {
      console.log("Authenticated User Profile:", profileData);
    }
  }, [profileData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ✅ Function to create a new youth movement
  const createYouthMovement = async (data: any) => {
    try {
      // ✅ Fetch authentication session
      const session = await fetchAuthSession();
      const idToken = session.tokens?.idToken?.toString();
  
      if (!idToken) {
        throw new Error("User is not authenticated.");
      }
  
      console.log("🔑 Auth Token:", idToken); // ✅ Debug token
  
      const response = await fetch("http://localhost:3001/api/youthMovements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`, // ✅ Include authentication token
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      return response.json();
    } catch (error) {
      console.error("❌ Error creating youth movement:", error);
      throw error;
    }
  };
  // ✅ Mutation to create youth movement
  const {
    mutate,
    isLoading: isMutating,
    error,
  } = useMutation({
    mutationFn: createYouthMovement,
    onSuccess: () => {
      setSuccessMessage("Jeugdbeweging succesvol geregistreerd!");
      router.push("/dashboard");
    },
  });

  // ✅ Submit handler
  const onSubmit = (data: any) => {
    if (!profileData) {
      console.error("❌ User profile is not available.");
      return;
    }
  
    console.log("📌 Submitting Youth Movement Data:", { ...data, adminId: profileData.id }); // ✅ Debug adminId
  
    mutate({
      ...data,
      adminId: profileData.id, // ✅ Send `adminId`
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="logo" width={200} height={200} />
      </div>

      {/* ✅ Show loading state */}
      {isLoading && <p>Loading user profile...</p>}
      {profileError && (
        <p className="error">Error fetching profile: {profileError.message}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Naam jeugdbeweging</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="description">Beschrijving</label>
        <textarea id="description" {...register("description")} />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}

        <div className={styles.flexForm}>
          <div>
            <label htmlFor="city">Stad</label>
            <input type="text" id="city" {...register("city")} />
            {errors.city && <p className="error">{errors.city.message}</p>}
          </div>
          <div>
            <label htmlFor="postalCode">Postcode</label>
            <input type="text" id="postalCode" {...register("postalCode")} />
            {errors.postalCode && (
              <p className="error">{errors.postalCode.message}</p>
            )}
          </div>
        </div>

        <div className={styles.flexForm}>
          <div>
            <label htmlFor="street">Straat</label>
            <input type="text" id="street" {...register("street")} />
            {errors.street && <p className="error">{errors.street.message}</p>}
          </div>
          <div>
            <label htmlFor="houseNumber">Huisnummer</label>
            <input type="text" id="houseNumber" {...register("houseNumber")} />
            {errors.houseNumber && (
              <p className="error">{errors.houseNumber.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isMutating}
        >
          {isMutating ? "Bezig met registreren..." : "Registreer"}
        </button>
      </form>

      {/* ✅ Success Message */}
      {successMessage && <p className="success">{successMessage}</p>}

      {/* ✅ Display API error message */}
      {error && <p className="error">Fout bij registratie: {error.message}</p>}
    </div>
  );
}
