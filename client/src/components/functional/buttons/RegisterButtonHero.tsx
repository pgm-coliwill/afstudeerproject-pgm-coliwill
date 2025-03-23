"use client"


import ButtonWithArrow from "@/components/buttons/ButtonWithArrow";
import React from "react";
import {useRouter} from "next/navigation";

export default function RegisterButtonHero() {

  const router = useRouter();
  return (
    <div>
      <ButtonWithArrow action={() => router.push("/signup?role=admin")}>
        Registreer hier je jeugdbeweging
      </ButtonWithArrow>
    </div>
  );
}
