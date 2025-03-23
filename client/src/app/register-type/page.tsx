import React from "react";
import styles from "@/styles/pages/ChooseRegister.module.css";

import Link from "next/link";
import BenefitsCardHero from "@/components/cards/BenefitsCardHero";

export default function ChooseRegister() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div className={styles.cardContainer}>
        <BenefitsCardHero
          title="Ik ben een ouder"
          description="Ik heb een code ontvangen via mail en wil me registreren als ouder."
          href="/signup?role=ouder"
        />

        <BenefitsCardHero
          title="Ik ben een leider"
          description="Ik heb een code ontvangen via mail en wil me inschrijven als leider."
          href="/signup?role=leider"
        />

        <BenefitsCardHero
          title="Jeugdbeweging"
          description="Ik wil graag mijn organisatie registreren op het KampVuur platform."
          href="/signup?role=admin"
        />
      </div>
    </div>
  );
}
