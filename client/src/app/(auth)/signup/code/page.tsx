"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin"); // Redirect to login page if not logged in
    }
  }, [user, router]);

  return (
    <div>
      <h1>Welcome, {user?.userId}</h1>
    </div>
  );
};

export default Dashboard;
