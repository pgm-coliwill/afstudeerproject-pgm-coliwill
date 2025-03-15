"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import StoreProvider from "./state/redux";
import Auth from "./(auth)/authProvider";
import QueryProvider from "@/providers/QueryProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <StoreProvider>
        <Authenticator.Provider>
          <Auth>{children}</Auth>
        </Authenticator.Provider>
      </StoreProvider>
    </QueryProvider>
  );
};

export default Providers;
