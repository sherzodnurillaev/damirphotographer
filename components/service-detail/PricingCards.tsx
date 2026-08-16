"use client";

import { Check } from "lucide-react";
import { useLocale } from "next-intl";

interface Props {
  packages: any[];
}

export default function PricingCards({
  packages,
}: Props) {
  const locale = useLocale() as "ru" | "en" | "uz";

  const t = {
    ru: {
      label: "Услуги",
      title: "Пакеты услуг",
      subtitle: "Выберите формат съёмки, который подходит именно вам",
      from: "от",
      button: "Забронировать",
    },
    en: {
      label: "Services",
      title: "Photography packages",
      subtitle: "Choose the photography experience that suits you best",
      from: "from",
      button: "Book now",
    },
    uz: {
      label: "Xizmatlar",
      title: "Xizmat paketlari",
      subtitle: "Sizga mos fotosessiya formatini tanlang",
      from: "dan",
      button: "Bron qilish",
    },
  }[locale];

  return (
    <section
      className="
        mt-24
        px-5
        sm:mt-28
        sm:px-8
        lg:mt-32
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Label */}
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
              {t.label}
            </span>

            <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
          </div>

          {/* Title */}
          <h2
            className="
              font-[var(--font-cormorant)]
              text-5xl
              font-medium
              leading-[0.95]
              tracking-[-0.02em]
              text-neutral-900
              dark:text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            {t.title}
          </h2>

          {/* Subtitle */}
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
            {t.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-px
            overflow-hidden
            border
            border-neutral-200
            bg-neutral-200
            dark:border-neutral-800
            dark:bg-neutral-800
            md:grid-cols-2
            xl:grid-cols-3
            sm:mt-20
          "
        >
          {packages.map((item, index) => (
            <div
              key={item.id}
              className="
                group
                relative
                flex
                flex-col
                bg-white
                p-8
                transition-colors
                duration-500
                hover:bg-neutral-50
                dark:bg-neutral-950
                dark:hover:bg-neutral-900
                sm:p-10
              "
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span
                  className="
                    font-[var(--font-manrope)]
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  {t.label}
                </span>

                <span
                  className="
                    font-[var(--font-cormorant)]
                    text-4xl
                    leading-none
                    text-neutral-200
                    dark:text-neutral-800
                  "
                >
                  0{index + 1}
                </span>
              </div>

              {/* Package title */}
              <h3
                className="
                  mt-8
                  min-h-[3.5rem]
                  font-[var(--font-cormorant)]
                  text-3xl
                  font-medium
                  leading-tight
                  text-neutral-900
                  dark:text-white
                  sm:text-4xl
                "
              >
                {item.title[locale]}
              </h3>

              {/* Price */}
              <div className="mt-8">
                <span
                  className="
                    font-[var(--font-manrope)]
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  {t.from}
                </span>

                <div className="mt-1 flex items-baseline gap-2">
                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-3xl
                      font-medium
                      leading-none
                      text-neutral-900
                      dark:text-white
                      sm:text-4xl
                    "
                  >
                    ${item.price}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-neutral-200 dark:bg-neutral-800" />

              {/* Features */}
              <div className="flex-1 space-y-5">
                {item.description[locale]
                  .split("\n")
                  .map((feature: string, featureIndex: number) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="
                          mt-0.5
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[rgb(93,87,81)]
                          text-[rgb(93,87,81)]
                          dark:border-white
                          dark:text-white
                        "
                      >
                        <Check size={11} strokeWidth={2} />
                      </div>

                      <span
                        className="
                          font-[var(--font-manrope)]
                          text-sm
                          font-light
                          leading-6
                          text-neutral-600
                          dark:text-neutral-400
                        "
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Button */}
<a
  href={`https://wa.me/998901234567?text=${encodeURIComponent(
    "Здравствуйте! Хочу заказать услугу фотографа."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-10
    flex
    w-full
    items-center
    justify-center
    rounded-full
    border
    border-neutral-900
    bg-neutral-900
    px-6
    py-4
    font-[var(--font-manrope)]
    text-xs
    font-medium
    uppercase
    tracking-[0.18em]
    text-white
    transition-all
    duration-300
    hover:bg-transparent
    hover:text-neutral-900
    active:scale-[0.98]

    dark:border-white
    dark:bg-white
    dark:text-neutral-900
    dark:hover:bg-transparent
    dark:hover:text-white
  "
>
  {t.button}
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}