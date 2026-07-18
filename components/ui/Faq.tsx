'use client';

import { useTranslations } from "next-intl";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-[6px] text-neutral-500">
            {t("badge")}
        </p>

        <h2 className="mt-3 text-4xl font-semibold">
            {t("title")}
        </h2>

        <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            {t("description")}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => {
          const open = active === index;

          return (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
            >
              <button
                onClick={() => setActive(open ? null : index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left"
              >
                <span className="font-medium text-lg">
                  {item.question}
                </span>

                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-neutral-600 dark:text-neutral-300 leading-8">
                      {item.answer}
                    </p>
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