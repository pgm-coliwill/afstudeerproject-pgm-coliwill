"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "@/styles/forms/RegisterForms.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  description: z.string().optional(),
  city: z.string().min(2, "Stad is verplicht"),
  postalCode: z.string().min(4, "Postcode moet 4 cijfers bevatten"),
  street: z.string().min(2, "Straatnaam is verplicht"),
  houseNumber: z.string().min(1, "Huisnummer is verplicht"),
});

export default function RegisterJeugdbewegingForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setError(null);
    try {
      const response = await fetch("/api/jeugdbewegingen/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Fout bij het registreren van de jeugdbeweging.");
      }

      setSuccessMessage("Jeugdbeweging succesvol geregistreerd!");
      setTimeout(() => router.push("/dashboard"), 3000); // Redirect after success
    } catch (err: unknown) {
      console.error("Registratie fout:", err);
      if (err instanceof Error) {
        setError(err.message || "Er is een fout opgetreden bij het registreren.");
      } else {
        setError("Er is een fout opgetreden bij het registreren.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="logo" width={200} height={200} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Naam jeugdbeweging</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="description">Beschrijving</label>
        <textarea id="description" {...register("description")} />
        {errors.description && <p className="error">{errors.description.message}</p>}

        <div className={styles.flexForm}>
          <div>
            <label htmlFor="city">Stad</label>
            <input type="text" id="city" {...register("city")} />
            {errors.city && <p className="error">{errors.city.message}</p>}
          </div>
          <div>
            <label htmlFor="postalCode">Postcode</label>
            <input type="text" id="postalCode" {...register("postalCode")} />
            {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}
          </div>
        </div>

        <div className={styles.flexForm}>
          <div>
            <label htmlFor="street">Straatnaam</label>
            <input type="text" id="street" {...register("street")} />
            {errors.street && <p className="error">{errors.street.message}</p>}
          </div>
          <div>
            <label htmlFor="houseNumber">Huisnummer</label>
            <input type="text" id="houseNumber" {...register("houseNumber")} />
            {errors.houseNumber && <p className="error">{errors.houseNumber.message}</p>}
          </div>
        </div>

        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <button type="submit" className={styles.submitButton}>
          Registreer
        </button>
      </form>
    </div>
  );
}
