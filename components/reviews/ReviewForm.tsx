"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

export default function ReviewForm() {
  const locale = useLocale() as "ru" | "en" | "uz";

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const translations = {
    ru: {
      name: "Ваше имя",
      review: "Ваш отзыв",
      rating: "Оценка",
      send: "Оставить отзыв",
      sending: "Отправляем...",
      success: "Спасибо! Ваш отзыв отправлен на модерацию.",
      error: "Не удалось отправить отзыв.",
    },

    en: {
      name: "Your name",
      review: "Your review",
      rating: "Rating",
      send: "Leave a review",
      sending: "Sending...",
      success:
        "Thank you! Your review has been sent for moderation.",
      error: "Failed to send the review.",
    },

    uz: {
      name: "Ismingiz",
      review: "Fikringiz",
      rating: "Baho",
      send: "Fikr qoldirish",
      sending: "Yuborilmoqda...",
      success:
        "Rahmat! Fikringiz moderatsiyaga yuborildi.",
      error: "Fikrni yuborib bo‘lmadi.",
    },
  };

  const t = translations[locale] ?? translations.ru;

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          text,
          rating,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setSuccess(t.success);

      setName("");
      setText("");
      setRating(5);
    } catch (error) {
      console.error(error);
      setError(t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        mx-auto
        w-full
        max-w-2xl
        min-w-0
        bg-transparent
      "
    >
      {/* Name */}
      <div className="min-w-0">
        <label
          className="
            mb-3
            block
            font-[var(--font-manrope)]
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-neutral-500
            dark:text-neutral-400
          "
        >
          {t.name}
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={100}
          className="
            w-full
            min-w-0
            border-0
            border-b
            border-neutral-300
            bg-transparent
            px-0
            py-3
            font-[var(--font-manrope)]
            text-sm
            text-neutral-900
            outline-none
            transition-colors
            duration-300
            placeholder:text-neutral-400
            focus:border-[rgb(93,87,81)]

            dark:border-neutral-700
            dark:text-white
            dark:focus:border-white

            sm:text-base
          "
        />
      </div>

      {/* Rating */}
      <div className="mt-10">
        <label
          className="
            mb-4
            block
            font-[var(--font-manrope)]
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-neutral-500
            dark:text-neutral-400
          "
        >
          {t.rating}
        </label>

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              type="button"
              key={value}
              onClick={() => setRating(value)}
              aria-label={`${value} ${t.rating}`}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                transition-transform
                duration-200
                hover:scale-110
                active:scale-95
                sm:h-10
                sm:w-10
              "
            >
              <span
                className={`
                  font-[var(--font-cormorant)]
                  text-2xl
                  leading-none
                  transition-all
                  duration-300
                  sm:text-3xl
                  ${
                    value <= rating
                      ? "text-[rgb(93,87,81)] dark:text-white"
                      : "text-neutral-300 dark:text-neutral-700"
                  }
                `}
              >
                ★
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Review */}
      <div className="mt-10 min-w-0">
        <label
          className="
            mb-3
            block
            font-[var(--font-manrope)]
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-neutral-500
            dark:text-neutral-400
          "
        >
          {t.review}
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          maxLength={1000}
          rows={5}
          className="
            w-full
            min-w-0
            resize-none
            border-0
            border-b
            border-neutral-300
            bg-transparent
            px-0
            py-3
            font-[var(--font-manrope)]
            text-sm
            leading-7
            text-neutral-900
            outline-none
            transition-colors
            duration-300
            focus:border-[rgb(93,87,81)]

            dark:border-neutral-700
            dark:text-white
            dark:focus:border-white

            sm:text-base
          "
        />
      </div>

      {/* Success */}
      {success && (
        <p
          className="
            mt-5
            font-[var(--font-manrope)]
            text-sm
            leading-6
            text-green-600
          "
        >
          {success}
        </p>
      )}

      {/* Error */}
      {error && (
        <p
          className="
            mt-5
            font-[var(--font-manrope)]
            text-sm
            leading-6
            text-red-500
          "
        >
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          mt-10
          inline-flex
          w-full
          items-center
          justify-center
          rounded-full
          border
          border-neutral-900
          bg-neutral-900
          px-8
          py-4
          font-[var(--font-manrope)]
          text-xs
          font-medium
          uppercase
          tracking-[0.2em]
          text-white
          transition-all
          duration-300

          hover:bg-transparent
          hover:text-neutral-900

          active:scale-[0.98]

          disabled:cursor-not-allowed
          disabled:opacity-50

          dark:border-white
          dark:bg-white
          dark:text-neutral-900
          dark:hover:bg-transparent
          dark:hover:text-white

          sm:py-5
        "
      >
        {loading ? t.sending : t.send}
      </button>
    </form>
  );
}