'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="mt-16 bg-[rgb(93,87,81)] text-white sm:mt-20">
      <div
        className="
          mx-auto
          max-w-[1260px]
          px-5
          py-10
          sm:px-8
          sm:py-12
          lg:px-10
          lg:py-14
        "
      >

        {/* Main content */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:gap-12
            md:grid-cols-3
            md:gap-8
            lg:gap-16
          "
        >

          {/* Logo / Description */}
          <div className="text-center md:text-left">

            <h2
              className="
                text-2xl
                font-bold
                sm:text-3xl
              "
            >
              Damir Registan
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-sm
                text-sm
                leading-7
                text-white/70
                sm:text-base
                md:mx-0
              "
            >
              {t('description')}
            </p>

          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">

            <h3
              className="
                mb-4
                text-lg
                font-semibold
                sm:mb-5
              "
            >
              {t('navigation')}
            </h3>

            <nav
              className="
                flex
                flex-col
                items-center
                gap-3
                text-sm
                text-white/70
                sm:text-base
                md:items-start
              "
            >

              <Link
                href={`/${locale}`}
                className="transition hover:text-white"
              >
                {t('home')}
              </Link>

              <Link
                href={`/${locale}/about`}
                className="transition hover:text-white"
              >
                {t('about')}
              </Link>

              <Link
                href={`/${locale}/portfolio`}
                className="transition hover:text-white"
              >
                {t('portfolio')}
              </Link>

              <Link
                href={`/${locale}/services`}
                className="transition hover:text-white"
              >
                {t('services')}
              </Link>

              <Link
                href={`/${locale}/faq`}
                className="transition hover:text-white"
              >
                {t('faq')}
              </Link>

              <Link
                href={`/${locale}/contacts`}
                className="transition hover:text-white"
              >
                {t('contacts')}
              </Link>

            </nav>

          </div>

          {/* Contacts */}
          <div className="text-center md:text-left">

            <h3
              className="
                mb-4
                text-lg
                font-semibold
                sm:mb-5
              "
            >
              {t('contacts')}
            </h3>

            <div
              className="
                flex
                flex-col
                items-center
                gap-4
                text-sm
                text-white/70
                sm:text-base
                md:items-start
              "
            >

              {/* Phone */}
              <a
                href="tel:+998951380120"
                className="
                  flex
                  items-center
                  gap-3
                  transition
                  hover:text-white
                "
              >
                <Phone size={18} />
                <span>+998 95 138-01-20</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@mail.com"
                className="
                  flex
                  items-center
                  gap-3
                  transition
                  hover:text-white
                "
              >
                <Mail size={18} />
                <span>info@mail.com</span>
              </a>

              {/* City */}
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{t('city')}</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-3
            border-t
            border-white/10
            pt-6
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