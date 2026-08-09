import { supabase } from "./supabase/client";


export async function getServiceByCategory(category: string) {
  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("category", category)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export async function getPackages(category: string) {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("service_category", category)
    .order("sort", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getGalleryByCategory(category: string) {
  const { data, error } = await supabase
    .from("color")
    .select("*")
    .eq("category", category);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
