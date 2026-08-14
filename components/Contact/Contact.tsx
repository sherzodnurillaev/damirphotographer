'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section className="max-w-6xl mx-auto px-5 lg:px-10 py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="flex justify-center">

          <Image
            src="/pictures/damir.jpeg"
            alt="Damir Registan"
            width={450}
            height={600}
            unoptimized
            className="rounded-3xl object-cover shadow-xl"
            priority
          />

        </div>

        {/* Contact */}
        <div>

          <h1 className="text-4xl lg:text-5xl font-bold">
            Damir Registan
          </h1>

          <p className="mt-6 text-lg text-neutral-500 leading-8">
            {t("subtitle")}
          </p>

          <div className="mt-10 space-y-5">

            {/* Phone */}
            <a
              href="tel:+998951380120"
              className="
                flex
                items-center
                gap-4
                text-lg
                transition
                duration-300
                hover:text-primary
              "
            >
              <Phone size={24} />

              <span>
                +998 95 138-01-20
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/998951380120"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                text-lg
                transition
                duration-300
                hover:text-green-600
              "
            >
              <FaWhatsapp size={24} />

              <span>
                WhatsApp
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/damir_registan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                text-lg
                transition
                duration-300
                hover:text-pink-500
              "
            >
              <FaInstagram size={24} />

              <span>
                @damir_registan
              </span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}