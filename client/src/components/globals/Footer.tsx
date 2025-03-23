"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/globals/footer.module.css";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div className={styles.footerContainer}>
        <footer className={`container ${styles.footer}`}>
          <div className={styles.leftContainer}>
            <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
            <div className={styles.buttonContainer}>
              <button
                className="primary"
                onClick={() => router.push("/register-type")}
              >
                Registreer
              </button>
              <button
                className="secondary"
                onClick={() => router.push("/dashboard")}
              >
                Login
              </button>
            </div>

            <div className={styles.socialLinks}>
              <Link href="#">
                <Image
                  src="/images/icons/facebook.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/images/icons/instagram.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/images/icons/twitter.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/images/icons/youtube.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.navContainer}>
              <p className={styles.navTitle}>Navigatie</p>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className={styles.navContainer}>
              <p className={styles.navTitle}>Legal</p>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Cookies Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
