"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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

  useEffect(() => {
    setVisibleCount(12);
  }, [category, color]);

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
        {images.slice(0, visibleCount).map((item) => (
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
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt="Damir Registan photography"
                width={700}
                height={1000}
                unoptimized
                loading="lazy"
                sizes="
                  (max-width: 480px) 50vw,
                  (max-width: 768px) 50vw,
                  (max-width: 1024px) 50vw,
                  33vw
                "
                className="
                  block
                  h-auto
                  w-full
                  object-cover

                  transition-transform
                  duration-700
                  ease-out

                  group-hover:scale-105
                "
              />

              {/* Hover overlay */}
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
            </div>
          </motion.div>
        ))}
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

              hover:bg-neutral-900
              hover:text-white
              hover:border-neutral-900

              active:scale-95

              dark:border-neutral-700
              dark:text-neutral-300
              dark:hover:bg-white
              dark:hover:text-neutral-900
              dark:hover:border-white

              sm:px-10
              sm:py-3.5
            "
          >
            {t("showMore")}
          </button>
        </div>
      )}
    </>
  );
}