"use client";

import React from "react";
import InviteForm from "@/components/forms/InviteForm";

export default function InviteUsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Invite Users</h1>
      <InviteForm role="leider"/>
      <InviteForm role="ouder"/>
    </div>
  );
}