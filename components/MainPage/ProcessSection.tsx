'use client'

import {
  Calendar,
  Shirt,
  Camera,
  Image as ImageIcon,
  Download,
} from 'lucide-react'

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
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[5px] text-sm text-neutral-500">
                {t("badge")}
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                {t("title")}
            </h2>

            <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-8">
                {t("description")}
            </p>
        </div>

        <div className="relative mt-20">

          {/* Линия только на десктопе */}
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-700" />

          <div className="space-y-10">

            {steps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="flex flex-col md:flex-row gap-6 md:gap-8"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex justify-center md:justify-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgb(93,87,81)] text-white shadow-lg transition-all duration-300 hover:scale-110">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                    <span className="text-sm font-medium text-neutral-500">
                      {t("step")} {step.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>

                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}