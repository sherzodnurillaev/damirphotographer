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
      send: "Оставить отзыв",
      sending: "Отправляем...",
      success:
        "Спасибо! Ваш отзыв отправлен на модерацию.",
      error:
        "Не удалось отправить отзыв.",
    },

    en: {
      name: "Your name",
      review: "Your review",
      send: "Leave a review",
      sending: "Sending...",
      success:
        "Thank you! Your review has been sent for moderation.",
      error:
        "Failed to send the review.",
    },

    uz: {
      name: "Ismingiz",
      review: "Fikringiz",
      send: "Fikr qoldirish",
      sending: "Yuborilmoqda...",
      success:
        "Rahmat! Fikringiz moderatsiyaga yuborildi.",
      error:
        "Fikrni yuborib bo‘lmadi.",
    },
  };

  const t = translations[locale];

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
        max-w-2xl
        mx-auto
        rounded-3xl
        border
        border-neutral-200
        dark:border-neutral-800
        bg-white
        dark:bg-neutral-900
        p-6
        md:p-10
        shadow-sm
      "
    >

      <div>
        <label className="block mb-2 font-medium">
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
            rounded-2xl
            border
            border-neutral-200
            dark:border-neutral-700
            bg-transparent
            px-5
            py-4
            outline-none
            focus:ring-2
            focus:ring-black
            dark:focus:ring-white
          "
        />
      </div>

      <div className="mt-6">

        <label className="block mb-3 font-medium">
          Оценка
        </label>

        <div className="flex gap-2">

          {[1, 2, 3, 4, 5].map((value) => (

            <button
              type="button"
              key={value}
              onClick={() => setRating(value)}
              className={`
                text-3xl
                transition
                ${
                  value <= rating
                    ? "opacity-100"
                    : "opacity-30"
                }
              `}
            >
              ⭐
            </button>

          ))}

        </div>

      </div>

      <div className="mt-6">

        <label className="block mb-2 font-medium">
          {t.review}
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          maxLength={1000}
          rows={6}
          className="
            w-full
            rounded-2xl
            border
            border-neutral-200
            dark:border-neutral-700
            bg-transparent
            px-5
            py-4
            outline-none
            resize-none
            focus:ring-2
            focus:ring-black
            dark:focus:ring-white
          "
        />

      </div>

      {success && (
        <p className="mt-5 text-green-600">
          {success}
        </p>
      )}

      {error && (
        <p className="mt-5 text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          mt-7
          w-full
          rounded-2xl
          bg-black
          dark:bg-white
          text-white
          dark:text-black
          py-4
          font-semibold
          transition
          hover:scale-[1.01]
          active:scale-[0.98]
          disabled:opacity-50
        "
      >
        {loading ? t.sending : t.send}
      </button>

    </form>
  );
}