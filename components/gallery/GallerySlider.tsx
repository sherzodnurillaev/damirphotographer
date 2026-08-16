"use client";

import Image from "next/image";

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
            z-10
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
            z-10
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
            <div
              key={`${item.id}-${index}`}
              className="
                relative
                h-[180px]
                w-[260px]
                shrink-0
                overflow-hidden
                rounded-[4px]

                sm:h-[220px]
                sm:w-[320px]
                sm:rounded-xl

                lg:h-[280px]
                lg:w-[400px]
                lg:rounded-2xl
              "
            >
              <Image
                src={item.image}
                alt={item.alt ?? "Damir Registan photography"}
                fill
                unoptimized
                sizes="400px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}