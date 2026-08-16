import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
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

  const currentSeo = seo[locale as keyof typeof seo];

  return {
    metadataBase: new URL(siteUrl),

    title: currentSeo.title,

    description: currentSeo.description,

    keywords: {
      ru: [
        "фотограф в Самарканде",
        "фотограф Самарканд",
        "фотограф в Узбекистане",
        "фотограф Узбекистан",
        "фотосессия в Самарканде",
        "фотосессия Самарканд",
        "фотограф на свадьбу в Самарканде",
        "семейный фотограф Самарканд",
        "фотограф для туристов Самарканд",
        "красивые места для фотосессии в Самарканде",
      ],

      en: [
        "photographer in Samarkand",
        "photographer Samarkand",
        "photographer in Uzbekistan",
        "photographer Uzbekistan",
        "photo shoot in Samarkand",
        "photoshoot Samarkand",
        "wedding photographer Samarkand",
        "family photographer Samarkand",
        "travel photographer Samarkand",
        "best places for photos in Samarkand",
      ],

      uz: [
        "Samarqandda fotograf",
        "Samarqand fotograf",
        "O'zbekistonda fotograf",
        "Samarqandda fotosessiya",
        "Samarqand fotosessiya",
        "Samarqandda to'y fotografi",
        "Samarqand oilaviy fotograf",
        "Samarqand sayyohlik fotografi",
        "Samarqanddagi chiroyli joylar",
        "suratga tushish joylari Samarqand",
      ],
    }[locale as "ru" | "en" | "uz"],

    alternates: {
      canonical: `/${locale}`,
      languages: {
        ru: "/ru",
        en: "/en",
        uz: "/uz",
        "x-default": "/ru",
      },
    },

    openGraph: {
      title: currentSeo.title,
      description: currentSeo.description,
      url: `/${locale}`,
      siteName: "Damir Registan",
      locale:
        locale === "ru"
          ? "ru_RU"
          : locale === "uz"
            ? "uz_UZ"
            : "en_US",
      type: "website",
      images: [
        {
          url: "/logo/logo.png",
          width: 1200,
          height: 630,
          alt: "Damir Registan — Photographer in Samarkand",
        },
      ],
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
        <Header />

        {children}

        <Footer />
      </NextIntlClientProvider>
    </Providers>
  );
}