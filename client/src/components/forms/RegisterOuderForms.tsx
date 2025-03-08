"use client";

import React, { useState } from "react";
import styles from "@/styles/forms/RegisterOuderForms.module.css"

export default function RegisterOuderForms() {
  const [step, setStep] = useState(1);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault(); 
    setStep(2);
  };
  
  return (
    <div className={styles.container}>
      <form action="">
        {step === 1 && (
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
        )}

        {step === 2 && (
          <div className={styles.secondForm}>
            <div className={styles.flexForm}>
              <div>
                <label htmlFor="name-child">Naam kind</label>
                <input type="text" id="name-child" />
              </div>
              <div>
                <label htmlFor="familyname-child">Familienaam kind</label>
                <input type="text" id="familyname-child" />
              </div>
            </div>

            <div className={styles.flexform}>
              <div>
                <label htmlFor="relation-with-child">Relatie met kind</label>
                <select name="relation-with-child" id="relation-with-child">
                  <option value="mother">Moeder</option>
                  <option value="father">Vader</option>
                  <option value="guardian">Voogd</option>
                </select>
              </div>

              <div>
                <label htmlFor="group">Groep</label>
                <select name="group" id="group">
                  <option value="baby">Baby</option>
                  <option value="peuter">Peuter</option>
                  <option value="kleuter">Kleuter</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </form>
      <div className={styles.buttonContainer}>
        {step === 1 && (
          <button className="primary" onClick={handleNext}>
            Verder
          </button>


        )}
        {/* Optionally, add a "Back" button if you want to allow navigation back */}

        {step === 2 && (
          <button className="primary">Registreer</button>
        )}
      </div>
    </div>
  );
}
