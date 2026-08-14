"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryImage {
  id: number | string;
  image: string;
  alt?: string;
}

interface Props {
  images: GalleryImage[];
}

export default function AutoGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) {
    return null;
  }

  /*
    Создаем бесконечный список,
    чтобы после последней картинки
    снова начинать с первой.
  */
  const visibleImages = Array.from(
    { length: Math.min(images.length, 6) },
    (_, index) => images[(current + index) % images.length]
  );

  return (
    <section className="w-full px-5 py-20 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-6
            lg:gap-6
          "
        >

          {visibleImages.map((item, index) => (

            <div
              key={`${item.id}-${current}-${index}`}
              className={`
                relative
                overflow-hidden
                rounded-3xl
                ${
                  index === 0 || index === 1 || index === 2
                    ? "lg:col-span-2"
                    : "lg:col-span-2"
                }
              `}
            >

              <div
                className="
                  relative
                  aspect-[4/5]
                  w-full
                "
              >

                <Image
                  src={item.image}
                  alt={item.alt ?? "Gallery image"}
                  unoptimized
                  fill
                  sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 33vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-all
                    duration-[2000ms]
                    ease-in-out
                  "
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}