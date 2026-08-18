'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-[rgb(93,87,81)] text-white">
      <div
        className="
          mx-auto
          max-w-[1260px]
          px-5
          py-5
          sm:px-8
          sm:py-12
          lg:px-10
          lg:py-14
        "
      >

        <div
          className="
            flex
            flex-col
            items-center
            gap-3
            border-t
            border-white/10
            pt-2
            text-center
            text-xs
            text-white/60
            sm:mt-12
            sm:pt-7
            sm:text-sm
            md:flex-row
            md:justify-between
            md:text-left
          "
        >

          <p>
            © {new Date().getFullYear()} Damir Registan.{' '}
            {t('rights')}
          </p>

          <p>
            {t('developed')}{' '}
            <span className="text-white">
              Damir Registan
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}