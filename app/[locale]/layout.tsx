import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "@/components/providers/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://damirregistan.com";

const seo = {
  ru: {
    title: "Фотограф в Самарканде — Damir Registan",
    description:
      "Профессиональный фотограф в Самарканде и Узбекистане. Индивидуальные, семейные, свадебные и туристические фотосессии. Красивые места Самарканда для фотосъёмки.",
  },

  en: {
    title: "Photographer in Samarkand — Damir Registan",
    description:
      "Professional photographer in Samarkand, Uzbekistan. Individual, family, wedding and travel photo sessions. Discover beautiful places in Samarkand for your photoshoot.",
  },

  uz: {
    title: "Samarqandda fotograf — Damir Registan",
    description:
      "Samarqand va O‘zbekistonda professional fotograf. Individual, oilaviy, to‘y va sayyohlik fotosessiyalari. Samarqanddagi chiroyli joylarda professional suratga tushish.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    return {};
  }

  const currentLocale = locale as "ru" | "en" | "uz";
  const currentSeo = seo[currentLocale];

  const keywords = {
    ru: [
      "фотограф в Самарканде",
      "фотограф Самарканд",
      "фотограф в Узбекистане",
      "фотограф Узбекистан",
      "фотосессия в Самарканде",
      "фотосессия Самарканд",
      "профессиональный фотограф Самарканд",
      "семейный фотограф Самарканд",
      "свадебный фотограф Самарканд",
      "Love Story Самарканд",
      "фотограф для туристов в Самарканде",
      "фотосессия возле Регистана",
      "красивые места для фотосессии в Самарканде",
    ],

    en: [
      "photographer in Samarkand",
      "photographer Samarkand",
      "photographer in Uzbekistan",
      "professional photographer Samarkand",
      "photoshoot in Samarkand",
      "photo session Samarkand",
      "wedding photographer Samarkand",
      "family photographer Samarkand",
      "Love Story photographer Samarkand",
      "travel photographer Samarkand",
      "photographer near Registan",
      "best places for photos in Samarkand",
    ],

    uz: [
      "Samarqandda fotograf",
      "Samarqand fotograf",
      "O'zbekistonda fotograf",
      "professional fotograf Samarqand",
      "Samarqandda fotosessiya",
      "Samarqand fotosessiya",
      "Samarqandda to'y fotografi",
      "Samarqand oilaviy fotograf",
      "Samarqand Love Story fotograf",
      "Samarqand sayyohlik fotografi",
      "Registon yaqinida fotosessiya",
      "Samarqanddagi chiroyli joylar",
    ],
  }[currentLocale];

  return {
    metadataBase: new URL(siteUrl),

    title: currentSeo.title,

    description: currentSeo.description,

    keywords,

    authors: [
      {
        name: "Damir Registan",
        url: siteUrl,
      },
    ],

    creator: "Damir Registan",

    publisher: "Damir Registan",

    category: "Photography",

    alternates: {
      canonical: `${siteUrl}/${currentLocale}`,

      languages: {
        ru: `${siteUrl}/ru`,
        en: `${siteUrl}/en`,
        uz: `${siteUrl}/uz`,
        "x-default": `${siteUrl}/ru`,
      },
    },

    openGraph: {
      title: currentSeo.title,

      description: currentSeo.description,

      url: `${siteUrl}/${currentLocale}`,

      siteName: "Damir Registan",

      locale:
        currentLocale === "ru"
          ? "ru_RU"
          : currentLocale === "uz"
            ? "uz_UZ"
            : "en_US",

      type: "website",

      images: [
        {
          url: `${siteUrl}/logo/logo.png`,
          width: 1200,
          height: 630,
          alt: currentSeo.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: currentSeo.title,
      description: currentSeo.description,
      images: [`${siteUrl}/logo/logo.png`],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <Providers>
      <NextIntlClientProvider messages={messages}>
        <LocalBusinessSchema />
        <Header />

        {children}

        <Footer />
      </NextIntlClientProvider>
    </Providers>
  );
}