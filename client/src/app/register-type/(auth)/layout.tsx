import Image from "next/image";
import styles from "@/styles/layouts/RegisterLayout.module.css";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.registerLayout}>
      <div className={styles.left}>{children}</div>

      <div className={styles.right}>
        <Image
          src="/images/register-choose-background.jpg"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </main>
  );
}
