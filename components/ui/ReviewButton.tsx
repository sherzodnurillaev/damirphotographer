"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { MessageSquarePlus } from "lucide-react";

export default function ReviewButton() {
  const t = useTranslations("reviews");
  const pathname = usePathname();

  // На главной странице кнопку не показываем
  if (pathname === "/") {
    return null;
  }

  const scrollToReviewForm = () => {
    const element = document.getElementById("review-form");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToReviewForm}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-2
        rounded-full
        bg-[rgb(93,87,81)]
        px-5
        py-3.5
        font-[var(--font-manrope)]
        text-xs
        font-medium
        uppercase
        tracking-[0.12em]
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-[rgb(73,68,63)]
        active:scale-95
        sm:bottom-8
        sm:right-8
      "
    >
      <MessageSquarePlus size={17} />

      <span>{t("button")}</span>
    </button>
  );
}