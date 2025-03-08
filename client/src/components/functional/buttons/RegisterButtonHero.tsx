"use client"


import ButtonWithArrow from "@/components/buttons/ButtonWithArrow";
import React from "react";

export default function RegisterButtonHero() {
  return (
    <div>
      <ButtonWithArrow action={() => console.log("clicked")}>
        Registreer hier je jeugdbeweging
      </ButtonWithArrow>
    </div>
  );
}
