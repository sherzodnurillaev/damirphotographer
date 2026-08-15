import GallerySlider from "@/components/gallery/GallerySlider";
import { getGalleryImages } from "@/lib/supabase/gallery";

export default async function SwipperPage() {
  const images = await getGalleryImages();

  return (
    <main>
      <GallerySlider images={images} />
    </main>
  );
}