
import TestimonialCards from "@/components/cards/TestimonialCards";
import RegisterButtonHero from "@/components/functional/buttons/RegisterButtonHero";
import SwitchLeidersOuders from "@/components/functional/home/SwitchLeidersOuders";
import styles from "@pageStyles/Home.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";


const tempImages = [
  "chiro-logo.webp",
  "ksa_logo.png",
  "ejv-logo.png",
  "jeugd-rode-kruis-logo.png",
  "kazou-logo.png",
  "scouts_logo.png",
];

export default function Home() {
  return (
    <>
      {/* hero section */}
      
        <section className={`container ${styles.heroSection}`}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>
              Direct contact tussen ouders en jeugdleiders
            </h1>
            <p className={styles.heroSubtitle}>
              Kampvuur brengt ouders en leiders samen op één platform. Geen
              verloren berichten, geen ruis – alleen snelle en veilige
              communicatie voor een soepele jeugdwerking.
            </p>
            <RegisterButtonHero />
          </div>
          <Image
            className={styles.heroImage}
            src="/images/handen_op_elkaar.png"
            alt="handen op elkaar"
            width={800}
            height={600}
            priority
          />
        </section>

        {/* logo banner */}

        <section className={styles.logoBanner}>
          <div className={styles.logoBannerContainer}>
            <Marquee autoFill={true}>
              {[...tempImages].map((image, index) => (
                <div key={index} className={styles.logoBannerImageContainer}>
                  <Image
                    className={styles.logoBannerImage}
                    src={`/images/jeugdbewegingen/${image}`}
                    alt="logo"
                    objectFit="contain"
                    width={130}
                    height={80}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        {/* info section */}
        <section>
          <SwitchLeidersOuders />
        </section>

        <section className={`container ${styles.testimonialSection}`}>
          <TestimonialCards
            imagePath="testimonial-leider.jpg"
            title="Communicatie met ouders is nog nooit zo eenvoudig geweest!"
            role="Stef - Hoofdleider Chiro Kadee"
            description="Als leider had ik altijd moeite om ouders tijdig te bereiken via WhatsApp of e-mail. Dankzij Kampvuur kan ik nu direct en overzichtelijk met ouders communiceren, zonder gedoe. Geen verloren berichten, geen dubbele vragen – alles staat netjes op één plek!"
          />

          <TestimonialCards
            imagePath="testimonial-ouder.jpg"
            title="Altijd op de hoogte van de laatste updates!"
            role="Sophie - Moeder van een scoutslid"
            description="Als ouder wil ik snel en duidelijk op de hoogte blijven van activiteiten en belangrijke mededelingen. Kampvuur zorgt ervoor dat ik geen enkele update mis. Geen eindeloze WhatsApp-groepen meer, gewoon duidelijke communicatie rechtstreeks van de leiding!"
          />
        </section>
      
    </>
  );
}
