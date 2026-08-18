"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ColorFilter({
  value,
  onChange,
}: Props) {
  const t = useTranslations("Colors");

  const colors = [
    {
      id: "blue",
      color: "#3B82F6",
      label: t("blue"),
    },
    {
      id: "red",
      color: "#EF4444",
      label: t("red"),
    },
    {
      id: "green",
      color: "#22C55E",
      label: t("green"),
    },
    {
      id: "pink",
      color: "#EC4899",
      label: t("pink"),
    },
    {
      id: "yellow",
      color: "#FACC15",
      label: t("yellow"),
    },
  ];

  return (
    <div
      className="
        mt-8
        flex
        flex-wrap
        justify-center
        gap-5
        sm:gap-6
      "
    >
      {colors.map((item) => {
        const isActive = value === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            aria-label={item.label}
            aria-pressed={isActive}
            className="group"
          >
            <div className="flex flex-col items-center gap-3">

              {/* Color */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                animate={{
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className={`
                  relative
                  h-12
                  w-12
                  rounded-full
                  transition-all
                  duration-300
                  sm:h-14
                  sm:w-14
                  ${
                    isActive
                      ? "ring-2 ring-[rgb(93,87,81)] ring-offset-4 dark:ring-offset-neutral-950"
                      : "ring-1 ring-black/5 dark:ring-white/10"
                  }
                `}
                style={{
                  backgroundColor: item.color,
                }}
              />

              {/* Label */}
              <span
                className={`
                  font-[var(--font-manrope)]
                  text-xs
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-300
                  sm:text-sm
                  ${
                    isActive
                      ? "text-[rgb(93,87,81)] dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400"
                  }
                `}
              >
                {item.label}
              </span>

            </div>
          </button>
        );
      })}
    </div>
  );
}