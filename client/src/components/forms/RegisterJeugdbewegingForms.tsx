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

  interface YouthMovementData {
    name: string;
    description?: string;
    city: string;
    postalCode: string;
    street: string;
    houseNumber: string;
    adminId?: number;
  }

  const createYouthMovement = async (data: YouthMovementData) => {
    try {
     
      const session = await fetchAuthSession();
      const idToken = session.tokens?.idToken?.toString();
  
      if (!idToken) {
        throw new Error("User is not authenticated.");
      }
  
      console.log("🔑 Auth Token:", idToken); 
  
      const response = await fetch("http://localhost:3001/api/youthMovements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`, 
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
    error,
  } = useMutation({
    mutationFn: createYouthMovement,
    onSuccess: () => {
      setSuccessMessage("Jeugdbeweging succesvol geregistreerd!");
      router.push("/registration/youth-movement/groups");
    },
  });

  // ✅ Submit handler
  const onSubmit = (data: YouthMovementData) => {
    if (!profileData) {
      console.error("❌ User profile is not available.");
      return;
    }
  
    console.log("📌 Submitting Youth Movement Data:", { ...data, adminId: profileData.id }); // ✅ Debug adminId
  
    mutate({
      ...data,
      adminId: profileData.id, 
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="logo" width={200} height={200} />
      </div>

    
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
        >
          Registreer
        </button>
      </form>

      {/* ✅ Success Message */}
      {successMessage && <p className="success">{successMessage}</p>}

      {/* ✅ Display API error message */}
      {error && <p className="error">Fout bij registratie: {error.message}</p>}
    </div>
  );
}
