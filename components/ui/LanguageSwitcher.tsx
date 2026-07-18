'use client';

import { useLocale } from 'next-intl';
import { Languages } from 'lucide-react';
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from '@/i18n/navigation';

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

const changeLocale = (newLocale: (typeof routing.locales)[number]) => {
  router.replace(pathname, {
    locale: newLocale,
  });
};


  return (
    <div className="flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-1">
      <Languages size={18} className="ml-2 text-neutral-500" />

      {locales.map((item) => (
        <button
          key={item.code}
          onClick={() => changeLocale(item.code)}
          className={`
            px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
            ${
              locale === item.code
                ? 'bg-[rgb(93,87,81)] text-white'
                : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }
          `}
        >
          <span className="mr-1">{item.flag}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
}