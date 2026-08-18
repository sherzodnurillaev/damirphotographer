"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

export interface GalleryItem {
  id: number;
  category: string;
  color: string | null;
  imag: string[];
  text: {
    ru: string;
    en: string;
    uz: string;
  };
}

interface Props {
  data: GalleryItem[];
  category: string;
  color: string;
}

const breakpoints = {
  default: 4,
  1536: 4,
  1280: 3,
  1024: 2,
  768: 2,
  480: 2,
};

export default function MasonryGallery({
  data,
  category,
  color,
}: Props) {
  const t = useTranslations("portfolio");

  const filtered = data.filter((item) => {
    if (item.category !== category) return false;

    if (category === "national") {
      return item.color === color;
    }

    return true;
  });

  const images = filtered.flatMap((item) =>
    item.imag.map((image: string, index: number) => ({
      id: `${item.id}-${index}`,
      image,
    }))
  );

  const [visibleCount, setVisibleCount] = useState(12);

  const [loadedImages, setLoadedImages] = useState<Set<string>>(
    new Set()
  );

  // Открытая фотография
  const [selectedImage, setSelectedImage] = useState<string | null>(
    null
  );

  useEffect(() => {
    setVisibleCount(12);
    setLoadedImages(new Set());
    setSelectedImage(null);
  }, [category, color]);

  // Закрытие по Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Блокируем скролл страницы при открытом фото
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* Gallery */}
      <Masonry
        breakpointCols={breakpoints}
        className="
          mt-8
          flex
          gap-2

          sm:mt-10
          sm:gap-3

          md:gap-4

          lg:mt-14
          lg:gap-6
        "
        columnClassName="
          space-y-2

          sm:space-y-3

          md:space-y-4

          lg:space-y-6
        "
      >
        {images.slice(0, visibleCount).map((item) => {
          const isLoaded = loadedImages.has(item.id);

          return (
            <motion.div
              key={item.id}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-xl

                sm:rounded-2xl

                lg:rounded-3xl
              "
              onClick={() => {
                if (isLoaded) {
                  setSelectedImage(item.image);
                }
              }}
            >
              <div className="relative overflow-hidden">
                {/* Skeleton */}
                {!isLoaded && (
                  <div
                    className="
                      absolute
                      inset-0
                      z-10
                      min-h-[180px]
                      animate-pulse
                      bg-neutral-200

                      dark:bg-neutral-800
                    "
                  />
                )}

                <Image
                  src={item.image}
                  alt="Damir Registan photography"
                  width={700}
                  height={1000}
                  unoptimized
                  loading="lazy"
                  onLoad={() => handleImageLoad(item.id)}
                  sizes="
                    (max-width: 480px) 50vw,
                    (max-width: 768px) 50vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className={`
                    block
                    h-auto
                    w-full
                    object-cover

                    transition-all
                    duration-700
                    ease-out

                    ${
                      isLoaded
                        ? "scale-100 opacity-100"
                        : "scale-[1.02] opacity-0"
                    }

                    group-hover:scale-105
                  `}
                />

                {/* Hover overlay */}
                {isLoaded && (
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      transition-colors
                      duration-500
                      group-hover:bg-black/20
                    "
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </Masonry>

      {/* Show more */}
      {visibleCount < images.length && (
        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="
              rounded-full
              border
              border-neutral-300
              bg-transparent
              px-8
              py-3

              font-[var(--font-manrope)]
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-neutral-700

              transition-all
              duration-300

              hover:border-neutral-900
              hover:bg-neutral-900
              hover:text-white

              active:scale-95

              dark:border-neutral-700
              dark:text-neutral-300
              dark:hover:border-white
              dark:hover:bg-white
              dark:hover:text-neutral-900

              sm:px-10
              sm:py-3.5
            "
          >
            {t("showMore")}
          </button>
        </div>
      )}

      {/* ========================= */}
      {/* LIGHTBOX */}
      {/* ========================= */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              p-4

              sm:p-8
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close image"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedImage(null);
              }}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-sm

                transition
                duration-300

                hover:bg-white
                hover:text-black

                sm:right-6
                sm:top-6
                sm:h-12
                sm:w-12
              "
            >
              <X
                size={22}
                strokeWidth={1.5}
              />
            </button>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                h-full
                w-full
                items-center
                justify-center
              "
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Damir Registan photography"
                fill
                sizes="100vw"
                unoptimized
                className="
                  object-contain
                  p-4

                  sm:p-8
                "
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}