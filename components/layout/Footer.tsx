'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[rgb(93,87,81)] text-white mt-20">
      <div className="max-w-[1260px] mx-auto px-6 md:px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">
              Damir Registan
            </h2>

            <p className="mt-4 text-white/70 leading-7 max-w-sm">
              {t('description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              {t('navigation')}
            </h3>

            <nav className="flex flex-col gap-3 text-white/70">
              <Link href="/">{t('home')}</Link>
              <Link href="/">{t('about')}</Link>
              <Link href="/">{t('portfolio')}</Link>
              <Link href="/">{t('services')}</Link>
              <Link href="/">{t('faq')}</Link>
              <Link href="/">{t('contacts')}</Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              {t('contacts')}
            </h3>

            <div className="space-y-4 text-white/70">

              <a
                href="tel:+79999999999"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone size={18} />
                +7 (999) 999-99-99
              </a>

              <a
                href="mailto:info@mail.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail size={18} />
                info@mail.com
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                {t('city')}
              </div>

              {/* <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Instagram size={18} />
                Instagram
              </a> */}

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">

          <p>
            © {new Date().getFullYear()} Damir Registan. {t('rights')}
          </p>

          <p>
            {t('developed')}{" "}
            <span className="text-white">Damir Registan</span>
          </p>

        </div>

      </div>
    </footer>
  );
}