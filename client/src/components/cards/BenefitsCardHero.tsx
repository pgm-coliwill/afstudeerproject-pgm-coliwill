// src/components/cards/BenefitsCardHero.tsx
import React from "react";
import styles from "@/styles/cards/BenefitsCardHero.module.css";
import { useRouter } from "next/navigation";

type BenefitsCardHeroProps = {
  title: string;
  description: string;
  hidden?: boolean;
  href?: string;            
  onClick?: () => void;     
};

export default function BenefitsCardHero({
  title,
  description,
  hidden,
  href,
  onClick,
}: BenefitsCardHeroProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) return onClick();
    if (href) router.push(href);
  };

  return (
    <div
      className={`${styles.card} ${hidden ? styles.hidden : ""}`}
      onClick={handleClick}
      role={href || onClick ? "button" : undefined}
      tabIndex={href || onClick ? 0 : undefined}
    >
      <h2>{title}</h2>
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
      </div>
    </div>
  );
}
