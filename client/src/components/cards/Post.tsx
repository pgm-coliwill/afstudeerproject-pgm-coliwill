import React from "react";
import styles from "@/styles/cards/Post.module.css";
import { Heart, MessageCircle, User } from "lucide-react";
import Image from "next/image";

export default function Post() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.profileContainer}>
        <User size={32} />
        <div className={styles.profileInfo}>
          <p className={styles.name}>Voornaam Naam</p>
          <p>14 februari om 20:00</p>
        </div>
      </div>

      <div className={styles.postImage}>
        <Image
          src="/images/register-image.jpg"
          alt="Event Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad,
        temporibus animi ut vero a nihil eos saepe doloribus accusamus id
        aliquid. Cum necessitatibus rem facere alias aut natus atque.
      </div>

      <div className={styles.interact}>
        <div className={styles.interactItem}>
          <Heart size={16} />
          <p>187 likes</p>
        </div>

        <div className={styles.interactItem}>
          <MessageCircle size={16} />
          <p>24 reacties</p>
        </div>
      </div>
    </div>
  );
}
