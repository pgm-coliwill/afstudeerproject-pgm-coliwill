"use client";

import styles from "@/styles/forms/RegisterOuderForms.module.css";
import Image from "next/image";

export default function RegisterOuderForms() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="ouders" width={200} height={200} />
      </div>

      <form action="">
        <div className={styles.firstForm}>
          <label htmlFor="code">Code</label>
          <input type="text" id="code" />

          <div className={styles.flexForm}>
            <div>
              <label htmlFor="name">Voornaam</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="familyname">Familienaam</label>
              <input type="text" id="familyname" />
            </div>
          </div>

          <label htmlFor="password">Wachtwoord</label>
          <input type="password" id="password" />

          <label htmlFor="repeat-password">Herhaal Wachtwoord</label>
          <input type="password" id="repeat-password" />
        </div>
      </form>
    </div>
  );
}
