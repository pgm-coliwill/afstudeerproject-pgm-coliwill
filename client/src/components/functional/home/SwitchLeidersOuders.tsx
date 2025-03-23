"use client";

import React, { useState } from "react";
import styles from "@pageStyles/Home.module.css";
import BenefitsCardHero from "@components/cards/BenefitsCardHero";

export default function SwitchLeidersOuders() {
 
  const [activeCategory, setActiveCategory] = useState<"leiders" | "ouders">("leiders");

  return (
    <>
     
      <div className={`container ${styles.buttonContainer}`}>
        <button 
          className={activeCategory === "leiders" ? "primary" : "secondary"} 
          onClick={() => setActiveCategory("leiders")}
        >
          Leiders
        </button>
        <button 
          className={activeCategory === "ouders" ? "primary" : "secondary"} 
          onClick={() => setActiveCategory("ouders")}
        >
          Ouders
        </button>
      </div>

      
      <div className={`container ${styles.cardGrid}`}>
        {activeCategory === "leiders" ? (
          <>
            <BenefitsCardHero
              title="Verstuur berichten zonder WhatsApp-chaos"
              description="Deel updates met ouders van jouw groep zonder gedoe, allemaal binnen één platform."
            />
            <BenefitsCardHero
              title="Beheer deelnemers en inschrijvingen moeiteloos"
              description="Krijg direct een overzicht van wie is ingeschreven, wie betaald heeft en wie nog een herinnering nodig heeft."
            />
            <BenefitsCardHero
              title="Geen privé-nummers meer nodig"
              description="Houd werk en privé gescheiden – ouders kunnen je bereiken zonder dat je je persoonlijke telefoonnummer hoeft te delen."
            />
          </>
        ) : (
          <>
            <BenefitsCardHero
              title="Blijf eenvoudig op de hoogte"
              description="Mis geen enkele update van de leiding over activiteiten, wijzigingen en belangrijke mededelingen."
            />
            <BenefitsCardHero
              title="Direct contact zonder gedoe"
              description="Stel snel en veilig vragen aan de leiding zonder door honderden WhatsApp-berichten te scrollen."
            />
            <BenefitsCardHero
              title="Inschrijvingen en betalingen op één plek"
              description="Meld je kind eenvoudig aan voor kampen en activiteiten en beheer betalingen zonder losse briefjes."
            />
          </>
        )}
      </div>
    </>
  );
}

