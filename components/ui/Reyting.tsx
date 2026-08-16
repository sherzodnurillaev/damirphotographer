"use client";

import { useTranslations } from "next-intl";

export default function Reyting() {
  const t = useTranslations("Rating");

  const stats = [
    {
      value: "500+",
      label: t("photoshoots"),
    },
    {
      value: "7+",
      label: t("experience"),
    },
    {
      value: "300+",
      label: t("clients"),
    },
    {
      value: "5★",
      label: t("rating"),
    },
  ];

  return (
    <div
      className="
        mt-10
        grid
        grid-cols-2
        gap-x-4
        gap-y-6

        sm:mt-14
        sm:gap-x-8
        sm:gap-y-8

        md:grid-cols-4
      "
    >
      {stats.map((item, index) => (
        <div
          key={item.label}
          className="
            group
            relative
            text-center
            md:text-left
          "
        >
          {/* Разделитель */}
          {index !== 0 && (
            <div
              className="
                absolute
                -left-4
                top-1/2
                hidden
                h-12
                w-px
                -translate-y-1/2
                bg-neutral-300 dark:bg-neutral-700

                sm:-left-4

                md:block
              "
            />
          )}

          {/* Number */}
          <h3
            className="
              font-[var(--font-cormorant)]
              text-4xl
              font-medium
              leading-none
              tracking-[-0.02em]
              text-neutral-600 dark:text-neutral-100
              transition-transform
              duration-300

              group-hover:-translate-y-1

              sm:text-5xl
            "
          >
            {item.value}
          </h3>

          {/* Label */}
          <p
            className="
              mt-2
              font-[var(--font-manrope)]
              text-[10px]
              font-medium
              uppercase
              leading-5
              tracking-[0.15em]
              text-neutral-500 dark:text-neutral-200

              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}