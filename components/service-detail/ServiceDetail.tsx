'use client';

import Image from "next/image";
import { useLocale } from "next-intl";
import PricingCards from "./PricingCards";
import MasonryGallery from "../portfolio/MasonryGallery";

interface Props {
  service: any;
  packages: any[];
  gallery: any[];
}

export default function ServiceDetail({
  service,
  packages,
  gallery,
}: Props) {

  const locale = useLocale() as "ru" | "en" | "uz";

  const t = {
    ru: {
      price: "Цена",
    },
    en: {
      price: "Price",
    },
    uz: {
      price: "Narxi",
    },
  }[locale];

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">

          <Image
            src={service.image}
            alt={service.title[locale]}
            fill
            className="object-cover"
            unoptimized
            priority
          />

        </div>

        <div>

          <h1 className="text-4xl lg:text-5xl font-bold">
            {service.title[locale]}
          </h1>

          <p className="mt-6 text-neutral-500 leading-8">
            {service.description?.[locale] ??
              service.short_description?.[locale]}
          </p>

          <div className="mt-10">

            <div className="flex justify-between border rounded-2xl p-6">

              <div>

                <p className="text-neutral-500">
                  {t.price}
                </p>

                <h2 className="text-3xl font-bold">
                  ${service.priceLow} - ${service.priceTop}
                </h2>

              </div>

              <div>

                <p className="text-neutral-500">
                  {service.duration[locale]}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Packages */}

                <PricingCards packages={packages} />

                <div className="mt-24">

  <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
    {locale === "ru"
      ? "Галерея"
      : locale === "en"
      ? "Gallery"
      : "Galereya"}
  </h2>

  <MasonryGallery
    data={gallery}
    category={service.category}
    color="blue"
  />

</div>

    </section>
  );
}