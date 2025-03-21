import CreatePost from "@/components/cards/CreatePost";
import AllPosts from "@/components/cards/AllPosts";
import React from "react";

export default function Page() {
  return (
    <div className="flex">
      <CreatePost />

      <AllPosts />
    </div>
  );
}
