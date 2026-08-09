import { supabase } from "./supabase/client";

export async function getGallery() {

    const { data, error } = await supabase
        .from("color")
        .select("*")
        .order("id");

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}