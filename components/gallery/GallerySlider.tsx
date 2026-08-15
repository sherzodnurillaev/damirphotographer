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

export default function GallerySlider({ images }: Props) {
  const [positions, setPositions] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Первые 6 фотографий
  useEffect(() => {
    if (!images || images.length === 0) {
      setPositions([]);
      return;
    }

    setPositions(images.slice(0, 6));
    setCurrentIndex(0);
  }, [images]);

  // Меняем одну фотографию каждые 2.5 секунды
  useEffect(() => {
    if (!images || images.length <= 6) {
      return;
    }

    const interval = setInterval(() => {
      setPositions((current) => {
        if (current.length === 0) {
          return current;
        }

        const next = [...current];

        const position = currentIndex % 6;

        const nextImage =
          images[6 + currentIndex];

        if (nextImage) {
          next[position] = nextImage;
        }

        return next;
      });

      setCurrentIndex((prev) => {
        const availableImages = images.length - 6;

        if (availableImages <= 0) {
          return 0;
        }

        return (prev + 1) % availableImages;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [images, currentIndex]);

  if (!positions.length) {
    return null;
  }

  return (
    <section
      className="
        w-full
        py-10

        sm:py-14

        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl

          px-2
          sm:px-5
          lg:px-10
        "
      >

        {/* DESKTOP */}

        <div className="hidden lg:grid grid-cols-3 gap-5">
          {positions.map((item, index) => (
            <GalleryCard
              key={index}
              item={item}
            />
          ))}
        </div>


        {/* TABLET */}

        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {positions.map((item, index) => (
            <GalleryCard
              key={index}
              item={item}
            />
          ))}
        </div>


        {/* MOBILE */}

        <div
          className="
            grid
            grid-cols-2
            gap-1.5

            sm:hidden
          "
        >
          {positions.map((item, index) => (
            <GalleryCard
              key={index}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


/* =====================================================
   GALLERY CARD
===================================================== */

function GalleryCard({
  item,
}: {
  item: GalleryImage;
}) {
  const [currentImage, setCurrentImage] =
    useState(item.image);

  const [nextImage, setNextImage] =
    useState<string | null>(null);

  const [isFading, setIsFading] =
    useState(false);

  useEffect(() => {
    if (item.image === currentImage) {
      return;
    }

    setNextImage(item.image);

    requestAnimationFrame(() => {
      setIsFading(true);
    });

    const timeout = setTimeout(() => {
      setCurrentImage(item.image);
      setNextImage(null);
      setIsFading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [item.image, currentImage]);

  return (
    <div
      className="
        relative
        aspect-[4/3]
        overflow-hidden

        rounded-[4px]
        sm:rounded-xl
        lg:rounded-2xl

        bg-neutral-100
        dark:bg-neutral-900
      "
    >

      {/* Current */}

      <Image
        src={currentImage}
        alt={
          item.alt ??
          "Damir Registan photography"
        }
        fill
        unoptimized
        sizes="
          (max-width: 640px) 50vw,
          (max-width: 1024px) 50vw,
          33vw
        "
        className="
          object-cover
        "
      />


      {/* Next */}

      {nextImage && (
        <Image
          src={nextImage}
          alt={
            item.alt ??
            "Damir Registan photography"
          }
          fill
          unoptimized
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className={`
            absolute
            inset-0
            object-cover
            transition-opacity
            duration-[2000ms]
            ease-in-out

            ${
              isFading
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />
      )}

    </div>
  );
}