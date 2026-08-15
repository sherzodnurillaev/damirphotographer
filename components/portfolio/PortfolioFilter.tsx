"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PortfolioFilter({
  value,
  onChange,
}: Props) {
  const t = useTranslations("Portfolio");

  const categories = [
    {
      id: "family",
      label: t("family"),
    },
    {
      id: "lovestory",
      label: t("lovestory"),
    },
    {
      id: "meeting",
      label: t("meeting"),
    },
    {
      id: "individual",
      label: t("individual"),
    },
    {
      id: "photoday",
      label: t("photoday"),
    },
    {
      id: "national",
      label: t("national"),
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div
        className="
          flex
          min-w-max
          justify-center
          gap-7
          px-2
          md:min-w-0
          md:flex-wrap
          md:gap-8
        "
      >
        {categories.map((item) => {
          const isActive = value === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className="
                relative
                shrink-0
                pb-2
              "
            >
              <span
                className={`
                  font-[var(--font-manrope)]
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  whitespace-nowrap
                  transition-colors
                  duration-300
                  sm:text-sm
                  ${
                    isActive
                      ? "text-[rgb(93,87,81)] dark:text-white"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }
                `}
              >
                {item.label}
              </span>

              {/* Active line */}
              {isActive && (
                <motion.span
                  layoutId="activePortfolio"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-full
                    bg-[rgb(93,87,81)]
                    dark:bg-white
                  "
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}