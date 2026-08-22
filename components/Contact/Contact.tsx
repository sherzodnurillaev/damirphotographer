"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      className="
        w-full
        bg-[#f5f3f0]
        px-4
        py-14

        sm:px-6
        sm:py-18

        md:px-8
        md:py-20

        lg:px-10
        lg:py-28

        dark:bg-neutral-950
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          items-center
          gap-12

          sm:gap-14

          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* Image */}
        <div className="flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-[320px]
              overflow-hidden
              rounded-[28px]
              sm:max-w-[380px]
              lg:max-w-[450px]
              lg:rounded-[36px]
            "
          >
            <Image
              src="/pictures/aboutDamir.PNG"
              alt="Damir Registan — фотограф"
              width={450}
              height={600}
              unoptimized
              priority
              className="
                h-auto
                w-full
                object-cover
                shadow-xl
              "
            />
          </div>
        </div>

        <div className="w-full min-w-0">

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#a08b76]

              sm:text-xs
            "
          >
            Contact
          </span>

          {/* Title */}
          <h1
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              leading-[1.1]

              sm:text-4xl

              lg:text-5xl
              xl:text-6xl

              text-neutral-900
              dark:text-white
            "
          >
            Damir Registan
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-neutral-600

              sm:mt-6
              sm:text-lg
              sm:leading-8

              dark:text-neutral-400
            "
          >
            {t("subtitle")}
          </p>

          {/* Contact links */}
          <div
            className="
              mt-8
              space-y-2

              sm:mt-10
              sm:space-y-3
            "
          >

            {/* Phone */}
            <a
              href="tel:+998951380120"
              className="
                group
                flex
                min-h-[54px]
                w-full
                items-center
                gap-4
                rounded-2xl
                px-3

                text-base
                text-[#a08b76]

                transition-all
                duration-300

                hover:bg-white
                hover:text-[#8b735d]

                sm:min-h-[58px]
                sm:px-4
                sm:text-lg

                dark:text-[#c1a388]
                dark:hover:bg-neutral-900
                dark:hover:text-[#d2b99e]
              "
            >
              <Phone
                size={22}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-110

                  sm:h-6
                  sm:w-6
                "
              />

              <span>+998 95 138-01-20</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/89270100094"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-h-[54px]
                w-full
                items-center
                gap-4
                rounded-2xl
                px-3

                text-base
                text-green-600

                transition-all
                duration-300

                hover:bg-white
                hover:text-green-600

                sm:min-h-[58px]
                sm:px-4
                sm:text-lg

                dark:text-green-500
                dark:hover:bg-neutral-900
              "
            >
              <FaWhatsapp
                size={22}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-110

                  sm:h-6
                  sm:w-6
                "
              />

              <span>WhatsApp</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/damir_registan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-h-[54px]
                w-full
                items-center
                gap-4
                rounded-2xl
                px-3

                text-base
                text-sky-500

                transition-all
                duration-300

                hover:bg-white
                hover:text-sky-500

                sm:min-h-[58px]
                sm:px-4
                sm:text-lg

                dark:text-sky-400
                dark:hover:bg-neutral-900
              "
            >
              <FaTelegramPlane
                size={22}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-110

                  sm:h-6
                  sm:w-6
                "
              />

              <span>Telegram</span>
            </a>

            {/* MAX */}
            <a
              href="https://max.ru/87080156095"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-h-[54px]
                w-full
                items-center
                gap-4
                rounded-2xl
                px-3

                text-base
                text-purple-500

                transition-all
                duration-300

                hover:bg-white
                hover:text-purple-500

                sm:min-h-[58px]
                sm:px-4
                sm:text-lg

                dark:text-purple-400
                dark:hover:bg-neutral-900
              "
            >
              <span
                className="
                  flex
                  h-[22px]
                  w-[22px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  bg-black
                  text-[11px]
                  font-bold
                  text-white

                  transition-transform
                  duration-300
                  group-hover:scale-110

                  dark:bg-white
                  dark:text-black

                  sm:h-6
                  sm:w-6
                "
              >
                M
              </span>

              <span>MAX</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/damir_registan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                min-h-[54px]
                w-full
                items-center
                gap-4
                rounded-2xl
                px-3

                text-base
                text-pink-500

                transition-all
                duration-300

                hover:bg-white
                hover:text-pink-500

                sm:min-h-[58px]
                sm:px-4
                sm:text-lg

                dark:text-pink-400
                dark:hover:bg-neutral-900
              "
            >
              <FaInstagram
                size={22}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-110

                  sm:h-6
                  sm:w-6
                "
              />

              <span>@damir_registan</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}