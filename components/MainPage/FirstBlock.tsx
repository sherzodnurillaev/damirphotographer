"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("banner");

  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVideoLoaded(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="
        relative
        h-[350px]
        min-h-[500px]
        overflow-hidden
        rounded-[4px]
        bg-neutral-200
        sm:h-[500px]
        md:h-screen
        dark:bg-neutral-900
      "
    >

      {!videoLoaded && (
        <div
          className="
            absolute
            inset-0
            z-[1]
            animate-pulse
            bg-neutral-200
            dark:bg-neutral-900
          "
          aria-hidden="true"
        >
          {/* Центральный skeleton */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
          >
            {/* Маленькая подпись */}
            <div
              className="
                h-3
                w-28
                rounded-full
                bg-neutral-300
                dark:bg-neutral-800
              "
            />

            {/* Заголовок */}
            <div
              className="
                mt-7
                h-12
                w-[70%]
                max-w-2xl
                rounded-lg
                bg-neutral-300
                dark:bg-neutral-800
                sm:h-16
              "
            />

            {/* Описание */}
            <div
              className="
                mt-7
                h-4
                w-[55%]
                max-w-xl
                rounded-full
                bg-neutral-300
                dark:bg-neutral-800
              "
            />

            <div
              className="
                mt-3
                h-4
                w-[40%]
                max-w-md
                rounded-full
                bg-neutral-300
                dark:bg-neutral-800
              "
            />
          </div>
        </div>
      )}

      {/* =========================
          VIDEO
      ========================== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/banner-poster.webp"
        onLoadedData={() => setVideoLoaded(true)}
        onCanPlay={() => setVideoLoaded(true)}
        className={`
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-opacity
          duration-1000
          ease-out
          ${
            videoLoaded
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <source
          src="/videos/26851462-929f-4c2e-9fbe-8e0e4af03034.mp4"
          type="video/mp4"
        />
      </video>

      {/* =========================
          OVERLAY
      ========================== */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          bg-black/45
        "
      />

      {/* =========================
          CONTENT
      ========================== */}
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