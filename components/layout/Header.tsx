'use client'

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

import { useState } from "react";
import ThemeToggle from "../ui/SwitchTheme";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const navigation = [
    {
      href: "/",
      label: t("home"),
    },
    {
      href: "/portfolio",
      label: t("portfolio"),
    },
    {
      href: "/services",
      label: t("services"),
    },
    {
      href: "/reviews",
      label: t("reviews"),
    },
    {
      href: "/contacts",
      label: t("contacts"),
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <div
        className="
          max-w-[1260px]
          mx-auto
          flex
          items-center
          justify-between
          px-6
          md:px-12
          py-5
          bg-[rgb(93,87,81)]
          text-white
          rounded-b-md
        "
      >

        <h1 className="text-xl font-bold">
          Damir Registan
        </h1>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">

          {navigation.map((item) => {

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}

          <LanguageSwitcher />

          <ThemeToggle />

        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">

          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              md:hidden
              bg-[rgb(93,87,81)]
              text-white
              mt-0
              rounded-[6px]
              my-[10px]
              border
              border-black
              overflow-hidden
            "
          >

            <nav className="flex flex-col gap-2 p-6">

              {navigation.map((item) => {

                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-white/15 text-white font-semibold"
                          : "text-white/60 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}

            </nav>

            <div className="px-6 pb-6">
              <LanguageSwitcher />
            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}