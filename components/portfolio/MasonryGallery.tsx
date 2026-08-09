'use client';

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
  480: 1,
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
      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-6 mt-14"
        columnClassName="space-y-6"
      >
        {images.slice(0, visibleCount).map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .4,
            }}
            className="
              overflow-hidden
              rounded-3xl
              group
              cursor-pointer
            "
          >
            <div className="relative">

              <Image
                src={item.image}
                alt=""
                width={700}
                height={1000}
                loading="lazy"
                className="
                  w-full
                  h-auto
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  group-hover:bg-black/20
                  duration-500
                "
              />

            </div>
          </motion.div>
        ))}
      </Masonry>

      {visibleCount < images.length && (
        <div className="flex justify-center mt-10">

          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="
              px-8
              py-3
              rounded-full
              bg-black
              text-white
              hover:opacity-90
              transition
            "
          >
            {t("showMore")}
          </button>

        </div>
      )}
    </>
  );
}