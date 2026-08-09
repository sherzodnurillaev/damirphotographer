'use client';

import PortfolioFilter from "./PortfolioFilter";
import ColorFilter from "./ColorFilter";
import MasonryGallery from "./MasonryGallery";
import { useEffect, useState } from "react";
import { getGallery } from "@/lib/gallery";
import { GalleryItem } from "./MasonryGallery";

export default function MainColorPage() {

    const [category, setCategory] = useState("family");
    const [color, setColor] = useState("blue");
    const [gallery, setGallery] = useState<GalleryItem[]>([]);

    useEffect(() => {

        async function loadGallery() {

            const data = await getGallery();
            console.log(data);
            
            setGallery(data);

        }

        loadGallery();

    }, []);

  return (
    <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">

      <PortfolioFilter
        value={category}
        onChange={setCategory}
      />

      {category === "national" && (
        <ColorFilter
          value={color}
          onChange={setColor}
        />
      )}

      <MasonryGallery
        data={gallery}
        category={category}
        color={color}
      />

    </section>
  );
}