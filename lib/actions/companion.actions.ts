"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";

export const createCompanion = async (FormData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...FormData, author })
    .select();

  console.log("error", error);
  console.log("data", data);

  if (error || !data)
    throw new Error(error?.message || "Failed to create a companion");

  return data[0];
};
