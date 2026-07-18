"use client";

import { useTranslations } from "next-intl";

export default function Reyting() {
  const t = useTranslations("Rating");

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
        <h3 className="text-2xl text-white font-bold">500+</h3>
        <p className="mt-2 text-sm text-[#DCD6D1]">
          {t("photoshoots")}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
        <h3 className="text-2xl text-white font-bold">7+</h3>
        <p className="mt-2 text-sm text-[#DCD6D1]">
          {t("experience")}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
        <h3 className="text-2xl text-white font-bold">300+</h3>
        <p className="mt-2 text-sm text-[#DCD6D1]">
          {t("clients")}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
        <h3 className="text-2xl text-white font-bold">5★</h3>
        <p className="mt-2 text-sm text-[#DCD6D1]">
          {t("rating")}
        </p>
      </div>
    </div>
  );
}
