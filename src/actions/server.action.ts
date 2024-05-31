"use server";

import { revalidatePath } from "next/cache";

export async function doServerAction() {
  revalidatePath("/");

  return { success: true, timestamp: new Date().toISOString() };
}
