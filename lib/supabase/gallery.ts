import { supabase } from "./client";

export async function getGalleryImages() {
  const { data, error } = await supabase
    .from("gallery")
    .select("id, image")
    .order("id", { ascending: true });

  console.log("GALLERY DATA:", data);
  console.log("GALLERY ERROR:", error);

  if (error) {
    return [];
  }

  return data ?? [];
}