'use client'

import Image from "next/image";
import { useTranslations } from "next-intl";
import Reyting from "../ui/Reyting";

export default function AboutBlock() {
  const t = useTranslations("About");

  return (
    <div className="p-[50px] bg-[#c1a388]">
      <div className="flex justify-center gap-12 items-center">
        <div className="max-w-[400px]">
          <h2 className="text-[24px] text-white">
            {t("title")}
          </h2>

          <p className="text-[#DCD6D1] mt-4 leading-8">
            {t("description")}
          </p>
        </div>

        <Image
          className="rounded-2xl"
          src="/about.jpg"
          width={300}
          height={300}
          alt="about"
        />
      </div>

      <div className="max-w-[760px] mx-auto">
        <Reyting />
      </div>
    </div>
  );
}