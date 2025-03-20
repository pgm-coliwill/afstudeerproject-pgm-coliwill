"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/globals/SideNav.module.css";
import { Home, Calendar, MessageCircle, Users, ClipboardPen, Settings } from "lucide-react";

const sidebarItems = [
  { title: "Home", url: "/dashboard", icon: <Home /> },
  { title: "Evenementen", url: "/dashboard/events", icon: <Calendar /> },
  { title: "Berichten", url: "/dashboard/messages", icon: <MessageCircle /> },
  { title: "Groepen", url: "/dashboard/groups", icon: <Users /> },
  { title: "Inschrijvingen", url: "/dashboard/registrations", icon: <ClipboardPen /> },
];

const settingsItems = [
  { title: "Instellingen", url: "/dashboard/settings", icon: <Settings /> },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      {/* Sidebar Toggle Button */}
      <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar Content */}
      <nav className={styles.menu}>
        {sidebarItems.map((item) => (
          <Link key={item.title} href={item.url} className={styles.menuItem}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={`${styles.text} ${isOpen ? styles.textVisible : styles.textHidden}`}>
              {item.title}
            </span>
          </Link>
        ))}
      </nav>

      {/* Settings Section */}
      <div className={styles.footer}>
        {settingsItems.map((item) => (
          <Link key={item.title} href={item.url} className={styles.menuItem}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={`${styles.text} ${isOpen ? styles.textVisible : styles.textHidden}`}>
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
