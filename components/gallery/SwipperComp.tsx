import GallerySlider from "@/components/gallery/GallerySlider";
import { getGalleryImages } from "@/lib/supabase/gallery";

export default async function SwipperPage() {
  const images = await getGalleryImages();

  return (
    <main>
      {/* твои существующие компоненты */}
      <h1>frfrfrfr</h1>

      <GallerySlider images={images} />

      {/* остальные компоненты */}
    </main>
  );
}