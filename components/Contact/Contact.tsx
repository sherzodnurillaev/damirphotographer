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

        <div className="flex justify-center">

          <Image
            src="/damir.jpg"
            alt="Damir Registan"
            width={450}
            height={600}
            className="rounded-3xl object-cover shadow-xl"
            priority
          />

        </div>

        <div>

          <h1 className="text-4xl lg:text-5xl font-bold">
            Damir Registan
          </h1>

          <p className="mt-6 text-lg text-neutral-500 leading-8">
            {t("subtitle")}
          </p>

          <div className="mt-10 space-y-5">

            <a
              href="tel:+998951380120"
              className="flex items-center gap-4 text-lg hover:text-primary duration-300"
            >
              <Phone />
              +998 95 138-01-20
            </a>

            <a
              href="https://wa.me/998951380120"
              target="_blank"
              className="flex items-center gap-4 text-lg hover:text-green-600 duration-300"
            >
              <FaWhatsapp size={24} />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/damir_registan"
              target="_blank"
              className="flex items-center gap-4 text-lg hover:text-pink-500 duration-300"
            >
              <FaInstagram size={24} />
              @damir_registan
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}