"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "@/styles/forms/RegisterForms.module.css";
import Image from "next/image";

const schema = z
  .object({
    code: z.string().min(3, "Code must be at least 3 characters"),
    name: z.string().min(2, "Voornaam is required"),
    familyname: z.string().min(2, "Familienaam is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    repeatPassword: z
      .string()
      .min(6, "Repeat password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

export default function RegisterOuderForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log("Form submitted", data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="ouders" width={200} height={200} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="code">Code</label>
        <input type="text" id="code" {...register("code")} />
        {errors.code && <p className="error">{errors.code.message}</p>}

        <div className={styles.flexForm}>
          <div>
            <label htmlFor="name">Voornaam</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="familyname">Familienaam</label>
            <input type="text" id="familyname" {...register("familyname")} />
            {errors.familyname && (
              <p className="error">{errors.familyname.message}</p>
            )}
          </div>
        </div>

        <label htmlFor="password">Wachtwoord</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <label htmlFor="repeatPassword">Herhaal Wachtwoord</label>
        <input
          type="password"
          id="repeatPassword"
          {...register("repeatPassword")}
        />
        {errors.repeatPassword && (
          <p className="error">{errors.repeatPassword.message}</p>
        )}

        <button type="submit" className="primary">
          Registreer
        </button>
      </form>
    </div>
  );
}
