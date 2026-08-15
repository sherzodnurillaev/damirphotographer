"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Emotion() {
  const t = useTranslations("Emotion");

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-16 lg:py-32">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          gap-16
          md:flex-row
          md:justify-between
          md:gap-20
          lg:gap-28
        "
      >
        {/* Фото */}
        <div
          className="
            relative
            h-[300px]
            w-[300px]
            shrink-0
            sm:h-[360px]
            sm:w-[360px]
            lg:h-[420px]
            lg:w-[420px]
          "
        >
          {/* Декоративная рамка */}
          <div
            className="
              absolute
              -bottom-4
              -right-4
              h-[260px]
              w-[260px]
              rounded-xl
              border
              border-neutral-300
              dark:border-neutral-700
              sm:h-[300px]
              sm:w-[300px]
              lg:h-[360px]
              lg:w-[360px]
            "
          />

          {/* Задняя фотография */}
          <Image
            src="/pictures/four.png"
            alt="emotion"
            width={420}
            height={420}
            unoptimized
            className="
              absolute
              -left-4
              -top-4
              h-[270px]
              w-[270px]
              rounded-xl
              object-cover
              opacity-40
              transition-transform
              duration-700
              group-hover:scale-[1.02]
              sm:-left-5
              sm:-top-5
              sm:h-[320px]
              sm:w-[320px]
              lg:h-[370px]
              lg:w-[370px]
            "
          />

          {/* Основная фотография */}
          <Image
            src="/pictures/four.png"
            alt="emotion"
            width={420}
            height={420}
            unoptimized
            className="
              absolute
              left-0
              top-0
              z-10
              h-[270px]
              w-[270px]
              rounded-xl
              object-cover
              sm:h-[320px]
              sm:w-[320px]
              lg:h-[370px]
              lg:w-[370px]
            "
          />
        </div>

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
            <span className="h-px w-8 bg-neutral-400 dark:bg-neutral-600" />

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
              Emotion
            </span>
          </div>

          {/* Заголовок */}
          <h2
            className="
              font-[var(--font-cormorant)]
              text-3xl
              font-medium
              leading-[0.95]
              tracking-[-0.02em]
              text-neutral-900
              dark:text-white
              sm:text-2xl
              lg:text-5xl
            "
          >
            {t("title")}
          </h2>

          {/* Декоративная линия */}
          <div className="mx-auto my-6 h-px w-14 bg-neutral-300 dark:bg-neutral-700 md:mx-0" />

          {/* Описание */}
          <p
            className="
              max-w-lg
              font-[var(--font-manrope)]
              text-sm
              font-light
              leading-7
              tracking-wide
              text-neutral-600
              dark:text-neutral-400
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}