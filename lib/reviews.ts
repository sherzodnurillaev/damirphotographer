// import { supabase } from "./supabase/client";

// export async function getReviews() {
//   const { data, error } = await supabase
//     .from("review_requests")
//     .select("*")
//     .order("created_at", {
//       ascending: false,
//     });

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   return data;
// }

import { supabase } from "./supabase/client";

export async function getReviews() {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("GET REVIEWS ERROR:", error);
    throw new Error(error.message);
  }

  console.log("REVIEWS:", data);

  return data ?? [];
}