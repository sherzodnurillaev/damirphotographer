'use client'

import {
  Check,
  ShieldCheck,
  Camera,
  HeartHandshake,
  Shirt,
  BadgeDollarSign,
} from "lucide-react";

import { useTranslations } from "next-intl";


export default function Advantages() {
    const t = useTranslations("Advantages");
    const advantages = [
  {
    icon: Camera,
    title: t("item1Title"),
    description: t("item1Description"),
  },
  {
    icon: ShieldCheck,
    title: t("item2Title"),
    description: t("item2Description"),
  },
  {
    icon: HeartHandshake,
    title: t("item3Title"),
    description: t("item3Description"),
  },
  {
    icon: Check,
    title: t("item4Title"),
    description: t("item4Description"),
  },
  {
    icon: Shirt,
    title: t("item5Title"),
    description: t("item5Description"),
  },
  {
    icon: BadgeDollarSign,
    title: t("item6Title"),
    description: t("item6Description"),
  },
];
  return (
    <section className="bg-[#c1a388] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[4px] text-sm">
                {t("badge")}
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
                {t("title")}
            </h2>

            <p className="mt-6 leading-8">
                {t("description")}
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-neutral-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgb(93,87,81)] mb-6 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}