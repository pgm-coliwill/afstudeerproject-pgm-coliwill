import React from "react";
import styles from "@/styles/cards/BenefitsCardHero.module.css"

type BenefitsCardHeroProps = {
  title: string;
  description: string;
  hidden?: boolean;
};

export default function BenefitsCardHero({
  title,
  description,
  hidden,
}: BenefitsCardHeroProps) {
  return (
    <div className={`${styles.card} ${hidden ? styles.hidden : ""}`}>
      <h2>{title}</h2>
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
      </div>
    </div>
  );
}
