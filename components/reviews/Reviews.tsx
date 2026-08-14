'use client';

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
  const locale = useLocale();

  const translations = {
    ru: {
      title: "Отзывы наших клиентов",
      subtitle: "Ваше мнение — наша лучшая рекомендация",
      empty: "Пока нет отзывов",
    },
    en: {
      title: "What our clients say",
      subtitle: "Your opinion is our best recommendation",
      empty: "No reviews yet",
    },
    uz: {
      title: "Mijozlarimiz fikrlari",
      subtitle: "Sizning fikringiz — bizning eng yaxshi tavsiyamiz",
      empty: "Hozircha sharhlar yo'q",
    },
  };

  const t =
    translations[locale as keyof typeof translations] ??
    translations.ru;

  return (
    <section className="w-full px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Reviews
          </span>

          <h2 className="
            mt-3
            text-3xl
            font-bold
            tracking-tight
            text-neutral-900
            dark:text-white
            sm:text-4xl
            lg:text-5xl
          ">
            {t.title}
          </h2>

          <p className="
            mt-4
            text-base
            leading-7
            text-neutral-500
            dark:text-neutral-400
            sm:text-lg
          ">
            {t.subtitle}
          </p>

        </div>

        {/* Reviews */}
        {reviews.length === 0 ? (

          <div className="
            rounded-3xl
            border
            border-neutral-200
            bg-white
            p-10
            text-center
            dark:border-neutral-800
            dark:bg-neutral-900
          ">
            <p className="text-neutral-500 dark:text-neutral-400">
              {t.empty}
            </p>
          </div>

        ) : (

          <div className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          ">

            {reviews.map((review) => (

              <article
                key={review.id}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  border
                  border-neutral-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  dark:border-neutral-800
                  dark:bg-neutral-900
                  sm:p-7
                "
              >

                {/* Stars */}
                <div className="flex gap-1">

                  {Array.from({ length: 5 }).map((_, index) => (

                    <Star
                      key={index}
                      size={18}
                      className={
                        index < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-neutral-300 dark:text-neutral-700"
                      }
                    />

                  ))}

                </div>

                {/* Review */}
                <p className="
                  mt-6
                  flex-1
                  text-base
                  leading-7
                  text-neutral-600
                  dark:text-neutral-300
                ">
                  “{review.text}”
                </p>

                {/* Author */}
                <div className="
                  mt-7
                  border-t
                  border-neutral-100
                  pt-5
                  dark:border-neutral-800
                ">

                  <p className="
                    font-semibold
                    text-neutral-900
                    dark:text-white
                  ">
                    {review.name}
                  </p>

                  <p className="
                    mt-1
                    text-sm
                    text-neutral-400
                  ">
                    Client
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