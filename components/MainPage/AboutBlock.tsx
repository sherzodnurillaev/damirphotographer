"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Reyting from "../ui/Reyting";

export default function AboutBlock() {
  const t = useTranslations("About");

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-28">
      
      {/* Основной блок */}
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          gap-12
          md:flex-row
          md:items-center
          md:justify-between
          md:gap-16
          lg:gap-24
        "
      >
        {/* Текст */}
        <div
          className="
            max-w-xl
            text-center
            md:text-left
          "
        >
          {/* Маленький акцент */}
          <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
            <span className="bg-neutral-300 dark:bg-neutral-700 h-px w-10 " />

            <span
              className="
                font-[var(--font-manrope)]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-neutral-600 dark:text-neutral-100
                sm:text-xs
              "
            >
              Photography
            </span>
          </div>

          {/* Заголовок */}
          <h2
            className="
              font-[var(--font-cormorant)]
              text-4xl
              font-medium
              leading-[0.95]
              tracking-[-0.02em]

              sm:text-5xl
              lg:text-7xl
            "
          >
            {t("title")}
          </h2>

          {/* Декоративная линия */}
          <div className="mx-auto my-6 h-px w-16 bg-neutral-300 dark:bg-neutral-700 md:mx-0" />

          {/* Описание */}
          <p
            className="
              max-w-lg
              font-[var(--font-manrope)]
              text-sm
              font-light
              leading-7
              tracking-wide

              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            {t("description")}
          </p>
        </div>

        {/* Фото */}
        <div className="relative shrink-0">
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
              border-white/30
            "
          />

          <Image
            src="/about.jpg"
            width={500}
            height={500}
            unoptimized
            alt="About Damir Registan"
            className="
              relative
              z-10
              h-[280px]
              w-[280px]
              rounded-2xl
              object-cover
              sm:h-[350px]
              sm:w-[350px]
              lg:h-[430px]
              lg:w-[430px]
            "
          />
        </div>
      </div>

      {/* Рейтинг */}
      <div
        className="
          mx-auto
          mt-20
          w-full
          max-w-[760px]
          border-t
          border-neutral-300 dark:border-neutral-700
          pt-10
          sm:mt-24
          sm:pt-12
          lg:mt-28
        "
      >
        <Reyting />
      </div>
    </section>
  );
}