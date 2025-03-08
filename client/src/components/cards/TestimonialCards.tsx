import React from 'react'
import styles from "@/styles/cards/TestimonialCards.module.css";
import Image from 'next/image';

interface TestimonialCardsProps {
  imagePath: string;
  title: string;
  role: string;
  description: string;
}

export default function TestimonialCards({ imagePath, title, role, description }: TestimonialCardsProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/${imagePath}`}
          alt={title}
          width={800}
          height={800}
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <p className={styles.role}>{role}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
