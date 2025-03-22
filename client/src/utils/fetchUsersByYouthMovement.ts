export async function fetchUsersByYouthMovement(youthMovementId: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/youthMovementUsers/${youthMovementId}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}