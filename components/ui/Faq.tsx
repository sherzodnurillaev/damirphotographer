"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const t = useTranslations("Faq");

  const faqs = [
    {
      question: t("q1"),
      answer: t("a1"),
    },
    {
      question: t("q2"),
      answer: t("a2"),
    },
    {
      question: t("q3"),
      answer: t("a3"),
    },
    {
      question: t("q4"),
      answer: t("a4"),
    },
    {
      question: t("q5"),
      answer: t("a5"),
    },
  ];

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-5xl
        px-5
        py-20

        sm:px-8
        sm:py-24

        lg:py-28
      "
    >
      {/* Header */}
      <div
        className="
          mx-auto
          mb-14
          max-w-3xl
          text-center

          sm:mb-16
        "
      >
        {/* Badge */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />

          <span
            className="
              font-[var(--font-manrope)]
              text-[10px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-neutral-500
              dark:text-neutral-400

              sm:text-xs
            "
          >
            {t("badge")}
          </span>

          <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
        </div>

        {/* Title */}
        <h2
          className="
            font-[var(--font-cormorant)]
            text-5xl
            font-medium
            leading-none
            tracking-[-0.02em]
            text-neutral-900
            dark:text-white

            sm:text-6xl
            lg:text-7xl
          "
        >
          {t("title")}
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            font-[var(--font-manrope)]
            text-sm
            font-light
            leading-7
            tracking-wide
            text-neutral-600
            dark:text-neutral-400

            sm:text-base
            sm:leading-8
          "
        >
          {t("description")}
        </p>
      </div>

      {/* FAQ */}
      <div
        className="
          border-t
          border-neutral-200
          dark:border-neutral-800
        "
      >
        {faqs.map((item, index) => {
          const open = active === index;

          return (
            <div
              key={index}
              className="
                border-b
                border-neutral-200
                dark:border-neutral-800
              "
            >
              <button
                type="button"
                onClick={() => setActive(open ? null : index)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-6
                  py-6
                  text-left

                  sm:py-7
                "
              >
                {/* Question */}
                <div className="flex min-w-0 items-start gap-5 sm:gap-7">

                  {/* Number */}
                  <span
                    className="
                      hidden
                      shrink-0
                      pt-1
                      font-[var(--font-manrope)]
                      text-[10px]
                      font-medium
                      tracking-[0.15em]
                      text-neutral-400

                      sm:block
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Text */}
                  <span
                    className={`
                      font-[var(--font-cormorant)]
                      text-2xl
                      font-medium
                      leading-tight
                      transition-colors
                      duration-300

                      sm:text-3xl

                      ${
                        open
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-700 dark:text-neutral-300"
                      }
                    `}
                  >
                    {item.question}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: open ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    text-neutral-500
                    transition-colors
                    duration-300

                    group-hover:border-neutral-400
                    group-hover:text-neutral-900

                    dark:border-neutral-800
                    dark:text-neutral-400
                    dark:group-hover:border-neutral-600
                    dark:group-hover:text-white
                  "
                >
                  <ChevronDown
                    size={17}
                    strokeWidth={1.5}
                  />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                        pb-7
                        pl-0
                        sm:pl-14
                      "
                    >
                      <p
                        className="
                          max-w-2xl
                          font-[var(--font-manrope)]
                          text-sm
                          font-light
                          leading-7
                          text-neutral-600
                          dark:text-neutral-400

                          sm:text-base
                          sm:leading-8
                        "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}