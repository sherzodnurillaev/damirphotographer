import { supabase } from "./supabase/client";

export async function getReviews() {
  const { data, error } = await supabase
    .from("review_requests")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}