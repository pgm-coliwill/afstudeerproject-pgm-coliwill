"use client";

import React, { useState } from "react";
import styles from "@styles/globals/navBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Navbar() {
  const { user } = useAuthenticator();
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.navbarContainer}>
      <nav className={`container ${styles.navbar}`}>
       
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />

   
        <ul className={styles.navlinks}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
        </ul>

        <div className={styles.authContainer}>
          {user ? (
            <button className="primary">
              <Link href="/dashboard">Dashboard</Link>
            </button>
          ) : (
            <>
              <button className="primary">
                <Link href="/register-type">Registreer</Link>
              </button>
              <button className="secondary">
                <Link href="/dashboard">Login</Link>
              </button>
            </>
          )}
        </div>

 
        <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </nav>

   
      {isOpen && (
        <div className={styles.mobileMenu}>
 
          <button className={styles.closeMenu} onClick={closeMenu}>
            X
          </button>

          <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
          <ul className={styles.mobileNavlinks}>
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" onClick={closeMenu}>
                FAQ
              </Link>
            </li>
          </ul>
          <div className={styles.mobileAuthContainer}>
            <button className="primary" onClick={closeMenu}>
              <Link href="/register-type">Registreer</Link>
            </button>
            <button className="secondary" onClick={closeMenu}>
              <Link href="/dashboard">Login</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
