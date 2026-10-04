"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  id: number | string;
  image: string;
  alt?: string;
}

interface Props {
  images: GalleryImage[];
}

export default function GallerySlider({ images }: Props) {
  if (!images || images.length === 0) {
    return null;
  }

  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden py-10 sm:py-14 lg:py-20">
      <div className="relative w-full overflow-hidden">

        {/* Левая тень */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-r
            from-white
            to-transparent
            dark:from-neutral-950
          "
        />

        {/* Правая тень */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-l
            from-white
            to-transparent
            dark:from-neutral-950
          "
        />

        {/* Бесконечная лента */}
        <div className="gallery-infinite-track flex w-max gap-2 sm:gap-3 lg:gap-4">
          {duplicatedImages.map((item, index) => (
            <GalleryItem
              key={`${item.id}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  item,
  index,
}: {
  item: GalleryImage;
  index: number;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="
        relative
        h-[180px]
        w-[260px]
        shrink-0
        overflow-hidden
        rounded-[4px]
        bg-neutral-200
        sm:h-[220px]
        sm:w-[320px]
        sm:rounded-xl
        lg:h-[280px]
        lg:w-[400px]
        lg:rounded-2xl
        dark:bg-neutral-900
      "
    >
      {/* Skeleton */}
      {!loaded && (
        <div
          className="
            absolute
            inset-0
            z-[1]
            animate-pulse
            bg-neutral-200
            dark:bg-neutral-900
          "
        />
      )}

      <Image
        src={item.image}
        alt={item.alt ?? "Damir Registan photography"}
        fill
        sizes="
          (max-width: 640px) 260px,
          (max-width: 1024px) 320px,
          400px
        "
        priority={index < 3}
        onLoad={() => setLoaded(true)}
        className={`
          object-cover
          transition-all
          duration-700
          ease-out
          ${
            loaded
              ? "scale-100 opacity-100"
              : "scale-[1.02] opacity-0"
          }
          hover:scale-105
        `}
      />
    </div>
  );
}