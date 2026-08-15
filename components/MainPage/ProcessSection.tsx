"use client";

import {
  Calendar,
  Shirt,
  Camera,
  Image as ImageIcon,
  Download,
} from "lucide-react";

import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("Process");

  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: t("item1Title"),
      description: t("item1Description"),
    },
    {
      icon: Shirt,
      number: "02",
      title: t("item2Title"),
      description: t("item2Description"),
    },
    {
      icon: Camera,
      number: "03",
      title: t("item3Title"),
      description: t("item3Description"),
    },
    {
      icon: ImageIcon,
      number: "04",
      title: t("item4Title"),
      description: t("item4Description"),
    },
    {
      icon: Download,
      number: "05",
      title: t("item5Title"),
      description: t("item5Description"),
    },
  ];

  return (
    <section className="px-6 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <div className="mb-5 flex items-center justify-center gap-3">
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
              {t("badge")}
            </span>

            <span className="h-px w-8 bg-neutral-400 dark:bg-neutral-600" />
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
              text-neutral-600
              dark:text-neutral-400
              sm:text-base
              sm:leading-8
            "
          >
            {t("description")}
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20 sm:mt-24">

          {/* Вертикальная линия */}
          <div
            className="
              absolute
              bottom-0
              left-7
              top-0
              hidden
              w-px
              bg-neutral-200
              dark:bg-neutral-800
              md:block
            "
          />

          <div className="space-y-8 sm:space-y-10">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:gap-8
                  "
                >
                  {/* Icon */}
                  <div className="relative z-10 flex shrink-0 justify-center md:justify-start">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-[rgb(93,87,81)]
                        text-white
                        shadow-md
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
                  </div>

                  {/* Card */}
                  <div
                    className="
                      flex-1
                      rounded-2xl
                      border
                      border-neutral-200
                      bg-white
                      p-7
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:shadow-xl
                      dark:border-neutral-800
                      dark:bg-neutral-950
                      md:p-9
                    "
                  >
                    <div className="flex items-start justify-between gap-6">

                      {/* Content */}
                      <div>

                        {/* Step */}
                        <span
                          className="
                            font-[var(--font-manrope)]
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.25em]
                            text-neutral-400
                            dark:text-neutral-500
                            sm:text-xs
                          "
                        >
                          {t("step")} {step.number}
                        </span>

                        {/* Title */}
                        <h3
                          className="
                            mt-3
                            font-[var(--font-cormorant)]
                            text-2xl
                            font-medium
                            leading-tight
                            text-neutral-900
                            dark:text-white
                            sm:text-4xl
                          "
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                            mt-4
                            max-w-2xl
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
                          {step.description}
                        </p>
                      </div>

                      {/* Большой номер */}
                      <span
                        className="
                          hidden
                          select-none
                          font-[var(--font-cormorant)]
                          text-5xl
                          font-medium
                          leading-none
                          text-neutral-200
                          dark:text-neutral-800
                          sm:block
                        "
                      >
                        {step.number}
                      </span>

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}