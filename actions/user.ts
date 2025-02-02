"use server";

import { db } from "@/config/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUsername(username: string) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const exit = await db.user.findUnique({
    where: { username },
  });
  if (exit && exit.id !== userId) {
    throw new Error("Username already taken");
  }
  await db.user.update({
    where: { clerkUserId: userId },
    data: { username },
  });
  (await clerkClient()).users.updateUser(userId, {
    username,
  });
  return { success: true };
}
