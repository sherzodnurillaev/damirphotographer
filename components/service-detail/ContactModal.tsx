"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import {
  X,
  MessageCircle,
  Send,
  MessageSquare,
} from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[19px] w-[19px]"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

const contacts = [
  {
    name: {
      ru: "WhatsApp",
      en: "WhatsApp",
      uz: "WhatsApp",
    },
    description: {
      ru: "Написать в WhatsApp",
      en: "Message on WhatsApp",
      uz: "WhatsApp orqali yozish",
    },
    href:
      "https://wa.me/79270100094?text=Здравствуйте!%20Хочу%20заказать%20услугу%20фотографа.",
    icon: MessageCircle,
  },
  {
    name: {
      ru: "Telegram",
      en: "Telegram",
      uz: "Telegram",
    },
    description: {
      ru: "Написать в Telegram",
      en: "Message on Telegram",
      uz: "Telegram orqali yozish",
    },
    href: "https://t.me/+998951380120",
    icon: Send,
  },
  {
    name: {
      ru: "Instagram",
      en: "Instagram",
      uz: "Instagram",
    },
    description: {
      ru: "Написать в Instagram",
      en: "Message on Instagram",
      uz: "Instagram orqali yozish",
    },
    href:
      "https://www.instagram.com/damir_registan?stkn=aTN4Y2lza2hiZjQy",
    icon: InstagramIcon,
  },
  {
    name: {
      ru: "MAX",
      en: "MAX",
      uz: "MAX",
    },
    description: {
      ru: "+7 708 015 6095",
      en: "+7 708 015 6095",
      uz: "+7 708 015 6095",
    },
    href: "https://max.ru/",
    icon: MessageSquare,
  },
];

const translations = {
  ru: {
    label: "Контакты",
    title: "Связаться с фотографом",
    subtitle: "Выберите удобный способ связи",
    close: "Закрыть",
  },

  en: {
    label: "Contacts",
    title: "Contact the photographer",
    subtitle: "Choose your preferred way to get in touch",
    close: "Close",
  },

  uz: {
    label: "Aloqa",
    title: "Fotograf bilan bog‘lanish",
    subtitle: "O‘zingizga qulay aloqa usulini tanlang",
    close: "Yopish",
  },
};

export default function ContactModal({
  open,
  onClose,
}: ContactModalProps) {
  const locale = useLocale() as "ru" | "en" | "uz";

  const t = translations[locale];

  // Закрытие по Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Запрещаем скролл страницы
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/40
        px-5
        backdrop-blur-sm
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-3xl
          border
          border-neutral-200
          bg-white
          p-6
          shadow-2xl
          dark:border-neutral-800
          dark:bg-neutral-950
          sm:p-8
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-neutral-400
            transition-colors
            hover:bg-neutral-100
            hover:text-neutral-900
            dark:hover:bg-neutral-900
            dark:hover:text-white
          "
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-px
                w-7
                bg-neutral-300
                dark:bg-neutral-700
              "
            />

            <span
              className="
                font-[var(--font-manrope)]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              {t.label}
            </span>
          </div>

          <h2
            className="
              font-[var(--font-cormorant)]
              text-4xl
              font-medium
              leading-none
              text-neutral-900
              dark:text-white
            "
          >
            {t.title}
          </h2>

          <p
            className="
              mt-4
              font-[var(--font-manrope)]
              text-sm
              font-light
              leading-6
              text-neutral-500
              dark:text-neutral-400
            "
          >
            {t.subtitle}
          </p>
        </div>

        {/* Contacts */}
        <div className="mt-7 space-y-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name.ru}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-neutral-200
                  p-4
                  transition-all
                  duration-300
                  hover:border-neutral-900
                  hover:bg-neutral-50
                  dark:border-neutral-800
                  dark:hover:border-white
                  dark:hover:bg-neutral-900
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-neutral-100
                    text-neutral-700
                    transition-colors
                    group-hover:bg-neutral-900
                    group-hover:text-white
                    dark:bg-neutral-900
                    dark:text-neutral-300
                    dark:group-hover:bg-white
                    dark:group-hover:text-neutral-900
                  "
                >
                  <Icon />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div
                    className="
                      font-[var(--font-manrope)]
                      text-sm
                      font-medium
                      text-neutral-900
                      dark:text-white
                    "
                  >
                    {contact.name[locale]}
                  </div>

                  <div
                    className="
                      mt-1
                      font-[var(--font-manrope)]
                      text-xs
                      font-light
                      text-neutral-500
                      dark:text-neutral-400
                    "
                  >
                    {contact.description[locale]}
                  </div>
                </div>

                {/* Arrow */}
                <span
                  className="
                    text-neutral-300
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-neutral-900
                    dark:text-neutral-700
                    dark:group-hover:text-white
                  "
                >
                  →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}