"use client";

import React, { useState } from "react";
import SideNav from "@/components/globals/Sidenav";
import styles from "@/styles/layouts/Dashboard.module.css";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className={styles.container}>
      <SideNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`${styles.content} ${isSidebarOpen ? styles.contentOpen : styles.contentClosed}`}>
        {children}
      </main>
    </div>
  );
}
