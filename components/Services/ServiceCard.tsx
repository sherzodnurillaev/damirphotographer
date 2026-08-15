"use client";

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
    <div
      className="
        group
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:shadow-2xl
        dark:bg-neutral-900
        sm:rounded-3xl
      "
    >
      {/* Фото */}
      <div
        className="
          relative
          h-[180px]
          overflow-hidden
          sm:h-[240px]
          md:h-[280px]
          lg:h-[320px]
        "
      >
        <Image
          src={service.image}
          alt={service.title[locale]}
          unoptimized
          fill
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 768px) 50vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/20
            transition
            group-hover:bg-black/35
          "
        />
      </div>

      {/* Контент */}
      <div
        className="
          p-3
          sm:p-5
          md:p-6
        "
      >
        {/* Заголовок */}
        <h3
          className="
            font-[var(--font-cormorant)]
            text-base
            font-semibold
            leading-tight
            text-neutral-900
            sm:text-xl
            md:text-2xl
            dark:text-white
          "
        >
          {service.title[locale]}
        </h3>

        {/* Описание */}
        <p
          className="
            mt-2
            font-[var(--font-manrope)]
            line-clamp-3
            text-xs
            leading-5
            text-neutral-600
            sm:mt-3
            sm:text-sm
            sm:leading-6
            md:text-base
            md:leading-7
            dark:text-neutral-400
          "
        >
          {service.short_description[locale]}
        </p>

        {/* Информация */}
        <div
          className="
            mt-4
            flex
            flex-col
            gap-3
            sm:mt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Длительность */}
          <div
            className="
              flex
              min-w-0
              items-center
              gap-1.5
              font-[var(--font-manrope)]
              text-xs
              text-neutral-600
              sm:gap-2
              sm:text-sm
              dark:text-neutral-400
            "
          >
            <Clock3
              size={16}
              className="shrink-0 sm:h-[18px] sm:w-[18px]"
            />

            <span className="truncate">
              {service.duration[locale]}
            </span>
          </div>

          {/* Цена */}
          <div className="min-w-0 text-left sm:text-right">
            <p
              className="
                font-[var(--font-manrope)]
                text-[10px]
                text-neutral-500
                sm:text-xs
                dark:text-neutral-400
              "
            >
              {t("price")}
            </p>

            <p
              className="
                font-[var(--font-cormorant)]
                text-sm
                font-bold
                text-neutral-900
                sm:text-base
                md:text-xl
                dark:text-white
              "
            >
              ${service.priceLow} – ${service.priceTop}
            </p>
          </div>
        </div>

        {/* Кнопка */}
        <Link
          href={`/${locale}/services/${service.category}`}
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-1.5
            rounded-xl
            border
            border-neutral-200
            px-3
            py-2.5
            font-[var(--font-manrope)]
            text-xs
            font-medium
            transition
            hover:bg-neutral-100
            sm:mt-6
            sm:justify-start
            sm:border-0
            sm:px-0
            sm:py-0
            sm:text-sm
            dark:border-neutral-700
            dark:hover:bg-neutral-800
            sm:dark:hover:bg-transparent
          "
        >
          Подробнее

          <ArrowRight
            size={16}
            className="
              transition-transform
              group-hover/button:translate-x-1
            "
          />
        </Link>
      </div>
    </div>
  );
}