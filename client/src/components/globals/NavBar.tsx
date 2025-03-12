"use client";

import React, { useState } from "react";
import styles from "@styles/globals/navBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.navbarContainer}>
      <nav className={`container ${styles.navbar}`}>
        {/* Logo */}
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />

        {/* Desktop Navigation Links */}
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

        {/* Desktop Authentication Buttons */}
        <div className={styles.authContainer}>
          <button className="primary">
            <Link href="/register-type">Registreer</Link>
          </button>
          <button className="secondary">
            <Link href="/signin">Login</Link>
          </button>
        </div>

        {/* Hamburger Button for Mobile */}
        <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {/* Close Button */}
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
              <Link href="#">Registreer</Link>
            </button>
            <button className="secondary" onClick={closeMenu}>
              <Link href="#">Login</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
