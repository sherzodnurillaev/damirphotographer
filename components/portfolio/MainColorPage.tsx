"use client";

import PortfolioFilter from "./PortfolioFilter";
import ColorFilter from "./ColorFilter";
import MasonryGallery from "./MasonryGallery";
import { useEffect, useState } from "react";
import { getGallery } from "@/lib/gallery";
import { GalleryItem } from "./MasonryGallery";
import { useTranslations } from "next-intl";

export default function MainColorPage() {
  const t = useTranslations("PortfolioPage");

  const [category, setCategory] = useState("national");
  const [color, setColor] = useState("blue");
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    async function loadGallery() {
      const data = await getGallery();

      setGallery(data);
    }

    loadGallery();
  }, []);

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[1400px]
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-10
        lg:py-28
      "
    >
      {/* Заголовок */}
      <div className="mx-auto max-w-3xl text-center">

        {/* Badge */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />

          <span
            className="
              font-[var(--font-manrope)]
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-neutral-500
              dark:text-neutral-400
              sm:text-xs
            "
          >
            {t("badge")}
          </span>

          <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
        </div>

        {/* Title */}
        <h2
          className="
            font-[var(--font-cormorant)]
            text-5xl
            font-medium
            leading-[0.95]
            tracking-[-0.02em]
            text-neutral-900
            dark:text-white
            sm:text-6xl
            lg:text-7xl
          "
        >
          {t("title")}
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            font-[var(--font-manrope)]
            text-sm
            font-light
            leading-7
            tracking-wide
            text-neutral-600
            dark:text-neutral-400
            sm:text-base
            sm:leading-8
          "
        >
          {t("description")}
        </p>
      </div>

      {/* Фильтры */}
      <div
        className="
          mt-14
          flex
          flex-col
          gap-5
          sm:mt-16
          sm:gap-6
        "
      >
        <div className="w-full overflow-x-auto">
          <PortfolioFilter
            value={category}
            onChange={setCategory}
          />
        </div>

        {category === "national" && (
          <div className="w-full overflow-x-auto">
            <ColorFilter
              value={color}
              onChange={setColor}
            />
          </div>
        )}
      </div>

      {/* Галерея */}
      <div className="mt-12 sm:mt-14 lg:mt-16">
        <MasonryGallery
          data={gallery}
          category={category}
          color={color}
        />
      </div>
    </section>
  );
}