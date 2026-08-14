'use client';

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Service } from "./types";
import { Clock3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({
  service,
}: {
  service: Service;
}) {
    const locale = useLocale() as "ru" | "en" | "uz";

    const t = useTranslations("services");

  return (
    <div className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        dark:bg-neutral-900
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-500
    ">

      <div className="relative h-[320px] overflow-hidden">

        <Image
          src={service.image}
          alt={service.title[locale]}
          unoptimized
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition" />
      </div>

      <div className="p-6 ">

          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
    {service.title[locale]}
  </h3>

  <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-7">
    {service.short_description[locale]}
  </p>

  <div className="mt-5 flex items-center justify-between">

    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
      <Clock3 size={18} />
      <span>{service.duration[locale]}</span>
    </div>

    {/* <span className="text-lg font-semibold text-neutral-900 dark:text-white">
      ${service.price}
    </span> */}
    <div className="text-right">

        <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {t("price")}
        </p>

        <p className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white whitespace-nowrap">
            ${service.priceLow} – ${service.priceTop}
        </p>

    </div>

  </div>

        <Link
            href={`/${locale}/services/${service.category}`}
            className="
                mt-6
                flex
                items-center
                gap-2
                font-medium
                group/button
            "
        >
          Подробнее

          <ArrowRight
            size={18}
            className="transition group-hover/button:translate-x-1"
          />

        </Link>

      </div>

    </div>
  );
}
