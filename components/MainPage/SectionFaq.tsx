"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FAQ from "../ui/Faq";

export default function SectionFaq() {
  const t = useTranslations("SectionFaq");

  return (
    <section
      className="
        bg-[#c1a388]
        px-5
        py-20
        text-white
        sm:px-8
        sm:py-24
        lg:px-16
        lg:py-28
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Subtitle */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/50" />

            <span
              className="
                font-[var(--font-manrope)]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white/70
                sm:text-xs
              "
            >
              {t("subtitle")}
            </span>

            <span className="h-px w-8 bg-white/50" />
          </div>

          {/* Title */}
          <h2
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-medium
              leading-[0.95]
              tracking-[-0.02em]
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
              mt-7
              max-w-2xl
              font-[var(--font-manrope)]
              text-sm
              font-light
              leading-7
              tracking-wide
              text-white/75
              sm:text-base
              sm:leading-8
            "
          >
            {t("description")}
          </p>
        </div>

        {/* Content */}
        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            gap-10
            md:mt-20
            md:flex-row
            md:items-start
            md:gap-12
            lg:gap-20
          "
        >

          {/* Фото */}
          <div className="hidden shrink-0 md:block md:w-[42%]">
            <div className="relative">

              {/* Декоративная рамка */}
              <div
                className="
                  absolute
                  -bottom-3
                  -right-3
                  h-full
                  w-full
                  rounded-2xl
                  border
                  border-white/25
                "
              />

              <Image
                src="/pictures/one.png"
                width={500}
                height={600}
                unoptimized
                alt="FAQ"
                className="
                  relative
                  z-10
                  h-[500px]
                  w-full
                  rounded-2xl
                  object-cover
                  lg:h-[560px]
                "
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="w-full md:flex-1">
            <FAQ />
          </div>

        </div>
      </div>
    </section>
  );
}