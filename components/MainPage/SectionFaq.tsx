"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FAQ from "../ui/Faq";

export default function SectionFaq() {
  const t = useTranslations("SectionFaq");

  return (
    <section>
      <div className="text-center mt-[50px]">
        <h3 className="text-2xl uppercase tracking-[4px]">
          {t("subtitle")}
        </h3>

        <h2 className="text-3xl md:text-4xl font-bold my-3">
          {t("title")}
        </h2>

        <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
          {t("description")}
        </p>
      </div>

      <div className="flex items-center md:gap-[30px] mt-10">
        <Image
          src="/pictures/one.png"
          width={400}
          height={200}
          alt="FAQ"
          className="rounded-2xl hidden md:block"
        />

        <FAQ />
      </div>
    </section>
  );
}