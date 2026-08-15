"use client";

import { useLocale } from "next-intl";
import { Languages } from "lucide-react";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales: {
  code: (typeof routing.locales)[number];
  label: string;
  flag: string;
}[] = [
  {
    code: "ru",
    label: "RU",
    flag: "🇷🇺",
  },
  {
    code: "en",
    label: "EN",
    flag: "🇺🇸",
  },
  {
    code: "uz",
    label: "UZ",
    flag: "🇺🇿",
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (
    newLocale: (typeof routing.locales)[number]
  ) => {
    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <div
      className="
        flex
        items-center
        gap-1
        rounded-full
        border
        border-white/20
        bg-black/20
        p-1
        backdrop-blur-md

        dark:border-white/10
        dark:bg-white/5
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          text-white/70
        "
      >
        <Languages
          size={16}
          strokeWidth={1.5}
        />
      </div>

      {/* Languages */}
      {locales.map((item) => {
        const active = locale === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => changeLocale(item.code)}
            className={`
              relative
              flex
              items-center
              gap-1.5
              rounded-full
              px-3
              py-1.5
              font-[var(--font-manrope)]
              text-[11px]
              font-medium
              tracking-[0.08em]
              transition-all
              duration-300

              ${
                active
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            <span
              className="
                text-xs
                leading-none
              "
            >
              {item.flag}
            </span>

            {item.label}
          </button>
        );
      })}
    </div>
  );
}