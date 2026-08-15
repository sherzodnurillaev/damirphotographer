"use client";

import {
  Check,
  ShieldCheck,
  Camera,
  HeartHandshake,
  Shirt,
  BadgeDollarSign,
} from "lucide-react";

import { useTranslations } from "next-intl";

export default function Advantages() {
  const t = useTranslations("Advantages");

  const advantages = [
    {
      icon: Camera,
      title: t("item1Title"),
      description: t("item1Description"),
    },
    {
      icon: ShieldCheck,
      title: t("item2Title"),
      description: t("item2Description"),
    },
    {
      icon: HeartHandshake,
      title: t("item3Title"),
      description: t("item3Description"),
    },
    {
      icon: Check,
      title: t("item4Title"),
      description: t("item4Description"),
    },
    {
      icon: Shirt,
      title: t("item5Title"),
      description: t("item5Description"),
    },
    {
      icon: BadgeDollarSign,
      title: t("item6Title"),
      description: t("item6Description"),
    },
  ];

  return (
    <section className="px-6 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
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
              text-3xl
              font-medium
              leading-[0.95]
              tracking-[-0.02em]
              text-neutral-900
              dark:text-white
              sm:text-4xl
              lg:text-5xl
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
              text-neutral-600
              dark:text-neutral-400
              sm:text-base
              sm:leading-8
            "
          >
            {t("description")}
          </p>
        </div>

        {/* Advantages */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:bg-neutral-50
                  dark:bg-neutral-950
                  dark:hover:bg-neutral-900
                  sm:p-10
                "
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[rgb(93,87,81)]
                      text-white
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-4xl
                      font-medium
                      leading-none
                      text-neutral-200
                      dark:text-neutral-800
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    font-[var(--font-cormorant)]
                    text-3xl
                    font-medium
                    leading-tight
                    text-neutral-900
                    dark:text-white
                    sm:text-3xl
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
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
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}