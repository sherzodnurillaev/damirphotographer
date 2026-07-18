'use client'

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Emotion() {
  const t = useTranslations("Emotion");

  return (
    <div className="p-[50px]">
      <div className="flex justify-center gap-12 items-center">
        <div className="relative w-[330px] h-[330px]">
          <Image
            src="/pictures/four.png"
            alt="emotion"
            width={300}
            height={300}
            className="absolute top-[-30px] left-[-30px] w-[300px] h-[300px] rounded-xl opacity-50 object-cover"
          />

          <Image
            src="/pictures/four.png"
            alt="emotion"
            width={300}
            height={300}
            className="absolute top-0 left-0 w-[300px] h-[300px] rounded-xl object-cover"
          />
        </div>

        <div className="max-w-[400px]">
          <h2 className="text-[24px]">
            {t("title")}
          </h2>

          <p className="mt-4">
            {t("description")}
          </p>
        </div>
      </div>
    </div>
  );
}