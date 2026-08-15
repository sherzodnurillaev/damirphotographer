"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import PricingCards from "./PricingCards";
import MasonryGallery from "../portfolio/MasonryGallery";

interface Props {
  service: any;
  packages: any[];
  gallery: any[];
}

export default function ServiceDetail({
  service,
  packages,
  gallery,
}: Props) {
  const locale = useLocale() as "ru" | "en" | "uz";

  const t = {
    ru: {
      price: "Стоимость",
      gallery: "Галерея",
      duration: "Продолжительность",
      service: "Услуга",
    },
    en: {
      price: "Price",
      gallery: "Gallery",
      duration: "Duration",
      service: "Service",
    },
    uz: {
      price: "Narxi",
      gallery: "Galereya",
      duration: "Davomiyligi",
      service: "Xizmat",
    },
  }[locale];

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-7xl
        px-5
        py-12

        sm:px-8
        sm:py-16

        lg:px-10
        lg:py-20
      "
    >

      {/* ================= HERO ================= */}
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-10

          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
          xl:gap-20
        "
      >

        {/* IMAGE */}
        <div
          className="
            relative
            h-[420px]
            w-full
            overflow-hidden

            sm:h-[520px]

            lg:h-[650px]
          "
        >
          <Image
            src={service.image}
            alt={service.title[locale]}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
            unoptimized
            priority
            sizes="
              (max-width: 1024px) 100vw,
              55vw
            "
          />
        </div>

        {/* INFO */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
          "
        >

          {/* LABEL */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />

            <span
              className="
                font-[var(--font-manrope)]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-neutral-500
                dark:text-neutral-400
              "
            >
              {t.service}
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="
              max-w-xl
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
            {service.title[locale]}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              max-w-xl
              font-[var(--font-manrope)]
              text-sm
              font-light
              leading-7
              text-neutral-600
              dark:text-neutral-400

              sm:text-base
              sm:leading-8
            "
          >
            {service.description?.[locale] ??
              service.short_description?.[locale]}
          </p>

          {/* INFO */}
          <div
            className="
              mt-10
              border-y
              border-neutral-200
              dark:border-neutral-800
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-6
                py-6
              "
            >
              {/* PRICE */}
              <div>
                <p
                  className="
                    font-[var(--font-manrope)]
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  {t.price}
                </p>

                <p
                  className="
                    mt-2
                    font-[var(--font-cormorant)]
                    text-4xl
                    font-medium
                    leading-none
                    text-neutral-900
                    dark:text-white

                    sm:text-5xl
                  "
                >
                  ${service.priceLow} – ${service.priceTop}
                </p>
              </div>

              {/* DURATION */}
              <div className="text-right">
                <p
                  className="
                    font-[var(--font-manrope)]
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  {t.duration}
                </p>

                <p
                  className="
                    mt-2
                    font-[var(--font-manrope)]
                    text-sm
                    font-medium
                    text-neutral-800
                    dark:text-neutral-200

                    sm:text-base
                  "
                >
                  {service.duration[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PACKAGES ================= */}
      {packages && packages.length > 0 && (
        <div
          className="
            mt-24
            sm:mt-28
            lg:mt-32
          "
        >
          <PricingCards packages={packages} />
        </div>
      )}

      {/* ================= GALLERY ================= */}
      {gallery && gallery.length > 0 && (
        <div
          className="
            mt-24
            sm:mt-28
            lg:mt-32
          "
        >
          {/* Gallery header */}
          <div className="mb-12 text-center sm:mb-16">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />

              <span
                className="
                  font-[var(--font-manrope)]
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-neutral-500
                  dark:text-neutral-400
                "
              >
                {t.gallery}
              </span>

              <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
            </div>

            <h2
              className="
                font-[var(--font-cormorant)]
                text-5xl
                font-medium
                leading-none
                tracking-[-0.02em]
                text-neutral-900
                dark:text-white

                sm:text-6xl
                lg:text-7xl
              "
            >
              {t.gallery}
            </h2>
          </div>

          <MasonryGallery
            data={gallery}
            category={service.category}
            color="blue"
          />
        </div>
      )}

    </section>
  );
}