'use client';

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
      title: "Пакеты услуг",
      subtitle: "Выберите пакет, который подходит именно вам",
      from: "от",
      button: "Забронировать"
    },
    en: {
      title: "Packages",
      subtitle: "Choose the package that suits you best",
      from: "from",
      button: "Book now"
    },
    uz: {
      title: "Xizmat paketlari",
      subtitle: "O'zingizga mos paketni tanlang",
      from: "dan",
      button: "Bron qilish"
    }
  }[locale];

  return (
    <section className="mt-24">

      <div className="text-center mb-14">

        <h2 className="text-4xl lg:text-5xl font-bold">
          {t.title}
        </h2>

        <p className="mt-4 text-neutral-500">
          {t.subtitle}
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {packages.map((item) => (

          <div
            key={item.id}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-neutral-200
              dark:border-neutral-800
              bg-white
              dark:bg-neutral-900
              p-8
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >

            <div
              className="
                absolute
                inset-x-0
                top-0
                h-1
                bg-gradient-to-r
                from-yellow-400
                via-orange-500
                to-red-500
              "
            />

            <h3 className="text-3xl font-bold">
              {item.title[locale]}
            </h3>

            <div className="mt-8">

              <span className="text-sm text-neutral-500">
                {t.from}
              </span>

              <h2 className="text-5xl font-black mt-2">
                ${item.price}
              </h2>

            </div>

            <div className="mt-10 space-y-5">

              {item.description[locale]
                .split("\n")
                .map((feature: string, index: number) => (

                  <div
                    key={index}
                    className="flex gap-3 items-start"
                  >

                    <div
                      className="
                        w-6
                        h-6
                        rounded-full
                        bg-green-500
                        text-white
                        flex
                        items-center
                        justify-center
                        text-sm
                        shrink-0
                      "
                    >
                      ✓
                    </div>

                    <span className="text-neutral-700 dark:text-neutral-300">
                      {feature}
                    </span>

                  </div>

                ))}

            </div>

            <button
              className="
                mt-10
                w-full
                rounded-2xl
                py-4
                bg-black
                text-white
                dark:bg-white
                dark:text-black
                font-semibold
                transition
                hover:scale-[1.02]
                active:scale-95
              "
            >
              {t.button}
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}