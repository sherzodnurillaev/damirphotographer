import { supabase } from "./client";

export async function getServices() {
  const { data, error } = await supabase
    .from("cards")
    .select("*")
    console.log(data)

  if (error) throw error;

  return data;
}