import { createNewUserInDatabase } from "@/lib/utils";
import { User } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { idToken } = session.tokens ?? {};
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`);
      }
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser()
          const userRole = idToken?.payload["custom:role"] as string;

          let endpoint;
          switch (userRole) {
            case "ouder":
              endpoint = `/ouder/${user.userId}`;
              break;
            case "leider":
              endpoint = `/leider/${user.userId}`;
              break;
            case "admin":
              endpoint = `/admin/${user.userId}`;
              break;
            default:
              return { error: { status: 400, data: "Invalid user role" } };
          }

          let userDetailsResponse = await fetchWithBQ(endpoint);

          if (userDetailsResponse.error && userDetailsResponse.error.status === 404) {
           userDetailsResponse = await createNewUserInDatabase(
              user,
              userRole,
              fetchWithBQ
           )
            
          }

          return {
            data: {
              cognitoInfo: {...user},
              userInfo: userDetailsResponse.data as User,
              userRole
            }
          }
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});
export const {} = api;
