"use client";

import React from "react";
import InviteForm from "@/components/forms/InviteForm";

import { useRouter } from "next/navigation";

export default function InviteUsersPage() {
  const router = useRouter();
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Invite Users</h1>
      <InviteForm role="leider"/>
      <InviteForm role="ouder"/>

      <button className="primary" onClick={() => router.push("/dashboard")}>Ga naar dashboard</button>
    </div>
  );
}