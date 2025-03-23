
import React from "react";
import CreateEvent from "@/components/events/CreateEvent";
import AllEvents from "@/components/events/AllEvents";

export default function EventsPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Evenementen</h1>
      <CreateEvent />
      <AllEvents />
    </div>
  );
}