import React from "react";
import styles from "@/styles/cards/EventDashboard.module.css"
import Image from "next/image";
import { Calendar, Shapes } from "lucide-react";

export default function EventDashboard() {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.eventHeader}>
        <p className={styles.eventName}>Naam Evenement</p>
        <p className={styles.groupName}>Groepsnaam</p>
      </div>

      <div className={styles.imageFlex}>
        <div className={styles.eventImage}>
          <Image
            src="/images/register-image.jpg"
            alt="Event Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.dateContainer}>
          <p className={styles.date}>13</p>
          <p className={styles.day}>ma</p>
          <p className={styles.month}>Feb</p>
        </div>
      </div>

      <div className={styles.eventDescription}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          libero voluptatum nulla nemo accusantium aut nisi provident, expedita
          ducimus magni minima ex ipsam ad eos pariatur odit dolorem, iste
          tempore!
        </p>
      </div>

      <div className={styles.detailsContainer}>
        <p className={styles.detailsTitle}>Details</p>
        <div className={styles.detail}>
          <div className={styles.detailWrapper}>
            <Shapes size={16} />
            <p>Type: Eetfestijn</p>
          </div>
          <div className={styles.detailWrapper}>
            <Calendar size={16} />
            <p>13/02/2023</p>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className="primary">Inschrijven</button>
        <button className="secondary">Vrijwillger 2/6</button>
      </div>
    </div>
  );
}
