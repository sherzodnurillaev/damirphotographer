"use client";

import { Star } from "lucide-react";
import { useLocale } from "next-intl";

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  created_at?: string;
}

interface Props {
  reviews: Review[];
}

export default function Reviews({ reviews }: Props) {
  const locale = useLocale() as "ru" | "en" | "uz";

  const translations = {
    ru: {
      label: "Отзывы",
      title: "Отзывы наших клиентов",
      subtitle: "Ваше мнение — наша лучшая рекомендация",
      empty: "Пока нет отзывов",
      client: "Клиент",
    },

    en: {
      label: "Reviews",
      title: "What our clients say",
      subtitle: "Your opinion is our best recommendation",
      empty: "No reviews yet",
      client: "Client",
    },

    uz: {
      label: "Sharhlar",
      title: "Mijozlarimiz fikrlari",
      subtitle: "Sizning fikringiz — bizning eng yaxshi tavsiyamiz",
      empty: "Hozircha sharhlar yo'q",
      client: "Mijoz",
    },
  };

  const t = translations[locale] ?? translations.ru;

  return (
    <section
      className="
        w-full
        max-w-full
        overflow-hidden
        px-5
        py-20

        sm:px-8
        sm:py-24

        lg:px-10
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* Header */}
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
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

        {/* Empty */}
        {reviews.length === 0 ? (
          <div
            className="
              mx-auto
              mt-16
              max-w-2xl
              border
              border-neutral-200
              px-6
              py-12
              text-center

              dark:border-neutral-800

              sm:mt-20
              sm:px-10
              sm:py-16
            "
          >
            <p
              className="
                font-[var(--font-manrope)]
                text-sm
                font-light
                text-neutral-500
                dark:text-neutral-400

                sm:text-base
              "
            >
              {t.empty}
            </p>
          </div>
        ) : (
          /* Reviews */
          <div
            className="
              mt-16
              flex
              w-full
              min-w-0
              max-w-full
              gap-4
              overflow-x-auto
              overflow-y-hidden
              pb-6

              snap-x
              snap-mandatory

              scrollbar-hide

              sm:mt-20
              sm:gap-5
            "
          >
            {reviews.map((review) => (
              <article
                key={review.id}
                className="
                  group
                  flex
                  w-[85%]
                  min-w-[85%]
                  max-w-[85%]
                  min-w-0
                  flex-shrink-0
                  snap-center
                  flex-col

                  border
                  border-neutral-200
                  bg-white
                  p-7

                  transition-colors
                  duration-500

                  hover:bg-neutral-50

                  dark:border-neutral-800
                  dark:bg-neutral-950
                  dark:hover:bg-neutral-900

                  sm:w-[60%]
                  sm:min-w-[60%]
                  sm:max-w-[60%]
                  sm:p-9

                  lg:w-[calc(33.333%-14px)]
                  lg:min-w-[calc(33.333%-14px)]
                  lg:max-w-[calc(33.333%-14px)]
                  lg:p-10
                "
              >
                {/* Stars */}
                <div className="flex shrink-0 items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={15}
                      strokeWidth={1.5}
                      className={
                        index < review.rating
                          ? "fill-[rgb(93,87,81)] text-[rgb(93,87,81)] dark:fill-white dark:text-white"
                          : "text-neutral-300 dark:text-neutral-700"
                      }
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-8 min-w-0 flex-1">
                  <span
                    className="
                      font-[var(--font-cormorant)]
                      text-5xl
                      leading-none
                      text-neutral-300
                      dark:text-neutral-700
                    "
                  >
                    “
                  </span>

                  <p
                    className="
                      -mt-2
                      min-w-0
                      max-w-full
                      break-words
                      overflow-hidden

                      font-[var(--font-cormorant)]
                      text-2xl
                      font-medium
                      leading-[1.25]
                      text-neutral-800
                      dark:text-neutral-200

                      sm:text-3xl
                    "
                  >
                    {review.text}
                  </p>
                </div>

                {/* Author */}
                <div
                  className="
                    mt-10
                    min-w-0
                    border-t
                    border-neutral-200
                    pt-5

                    dark:border-neutral-800
                  "
                >
                  <p
                    className="
                      min-w-0
                      max-w-full
                      truncate

                      font-[var(--font-manrope)]
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-neutral-900
                      dark:text-white
                    "
                  >
                    {review.name}
                  </p>

                  <p
                    className="
                      mt-1
                      font-[var(--font-manrope)]
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-neutral-400
                    "
                  >
                    {t.client}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}