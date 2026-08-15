"use client";

import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("banner");

  return (
    <section
      className="
        relative
        h-[350px]
        min-h-[500px]
        overflow-hidden
        rounded-[4px]
        sm:h-[500px]
        md:h-screen
      "
    >
      {/* Видео */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/videos/26851462-929f-4c2e-9fbe-8e0e4af03034.mp4"
          type="video/mp4"
        />
      </video>

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Контент */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          items-center
          justify-center
          px-5
          text-center
          text-white
          sm:px-8
        "
      >
        {/* Маленькая подпись */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-white/60" />

          <span
            className="
              font-[var(--font-manrope)]
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/75
              sm:text-xs
            "
          >
            Photography
          </span>

          <span className="h-px w-8 bg-white/60" />
        </div>

        {/* Заголовок */}
        <h1
        className="
            max-w-4xl
            font-[var(--font-cormorant)]
            text-4xl
            font-medium
            leading-[0.95]
            tracking-[-0.02em]
            sm:text-3xl
            md:text-3xl
            lg:text-5xl
            xl:text-7xl
        "
        >
        {t("title")}
        </h1>

        {/* Описание */}
        <p
          className="
            mt-8
            max-w-xl
            font-[var(--font-manrope)]
            text-sm
            font-light
            leading-7
            tracking-[0.02em]
            text-white/80
            sm:text-base
            sm:leading-8
            md:text-lg
          "
        >
          {t("description")}
        </p>
      </div>
    </section>
  );
}