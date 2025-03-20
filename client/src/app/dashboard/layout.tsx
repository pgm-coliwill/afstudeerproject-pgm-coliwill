import React from "react";
import SideNav from "@/components/globals/Sidenav";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      <main className="content">{children}</main>
    </div>
  );
}
