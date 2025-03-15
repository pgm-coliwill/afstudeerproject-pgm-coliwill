import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createNewUserInDatabase = async (
  user: { name: string; email: string },
  idToken: string,
  fetchWithBQ: (endpoint: string, options: { method: string; body: string }) => Promise<Response>
) => {
  const endpoint = `/createUser`;
  const response = await fetchWithBQ(endpoint, {
    method: "POST",
    body: JSON.stringify({ user, idToken }),
  });

  return response;
}