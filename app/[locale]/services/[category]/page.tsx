import type { Metadata } from "next";
import ServiceDetail from "@/components/service-detail/ServiceDetail";
import { notFound } from "next/navigation";

import {
  getPackages,
  getServiceByCategory,
  getGalleryByCategory,
} from "@/lib/services";

interface Props {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

const siteUrl = "https://damirregistan.com";

const seo = {
  ru: {
    meeting: {
      title: "Индивидуальная фотосессия в Самарканде — Damir Registan",
      description:
        "Индивидуальная фотосессия в Самарканде с профессиональным фотографом. Красивые локации, помощь с позированием и индивидуальный подход.",
    },

    lovestory: {
      title: "Love Story фотосессия в Самарканде — Damir Registan",
      description:
        "Романтическая Love Story фотосессия в Самарканде. Съёмка для пар в красивых местах города и возле исторических достопримечательностей.",
    },

    family: {
      title: "Семейный фотограф в Самарканде — Damir Registan",
      description:
        "Семейная фотосессия в Самарканде с профессиональным фотографом. Тёплые семейные фотографии в красивых локациях города.",
    },

    national: {
      title: "Фотосессия в национальных образах в Самарканде — Damir Registan",
      description:
        "Фотосессия в национальных узбекских образах в Самарканде. Исторические локации, красивые фотографии и атмосфера древнего города.",
    },
  },

  en: {
    meeting: {
      title: "Individual Photoshoot in Samarkand — Damir Registan",
      description:
        "Professional individual photoshoot in Samarkand with beautiful locations, posing guidance and a personalized approach.",
    },

    lovestory: {
      title: "Love Story Photoshoot in Samarkand — Damir Registan",
      description:
        "Romantic Love Story photoshoot in Samarkand for couples. Beautiful locations and historic landmarks around the city.",
    },

    family: {
      title: "Family Photographer in Samarkand — Damir Registan",
      description:
        "Professional family photoshoot in Samarkand. Warm family photographs in beautiful locations around the city.",
    },

    national: {
      title: "Traditional Uzbek Photoshoot in Samarkand — Damir Registan",
      description:
        "Traditional Uzbek costume photoshoot in Samarkand. Historic locations, beautiful photography and authentic atmosphere.",
    },
  },

  uz: {
    meeting: {
      title: "Samarqandda individual fotosessiya — Damir Registan",
      description:
        "Samarqandda professional fotograf bilan individual fotosessiya. Chiroyli joylar, pozaga yordam va individual yondashuv.",
    },

    lovestory: {
      title: "Samarqandda Love Story fotosessiyasi — Damir Registan",
      description:
        "Juftliklar uchun Samarqandda romantik Love Story fotosessiyasi. Shaharning chiroyli va tarixiy joylarida suratga tushish.",
    },

    family: {
      title: "Samarqandda oilaviy fotograf — Damir Registan",
      description:
        "Samarqandda professional oilaviy fotosessiya. Shaharning chiroyli joylarida samimiy oilaviy suratlar.",
    },

    national: {
      title: "Samarqandda milliy liboslarda fotosessiya — Damir Registan",
      description:
        "Samarqandda o‘zbek milliy liboslarida fotosessiya. Tarixiy joylar, chiroyli suratlar va qadimiy shahar muhiti.",
    },
  },
} as const;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, category } = await params;

  if (!["ru", "en", "uz"].includes(locale)) {
    return {};
  }

  if (!["meeting", "lovestory", "family", "national"].includes(category)) {
    return {};
  }

  const currentLocale = locale as "ru" | "en" | "uz";
  const currentCategory =
    category as "meeting" | "lovestory" | "family" | "national";

  const currentSeo = seo[currentLocale][currentCategory];

  const url = `${siteUrl}/${currentLocale}/services/${currentCategory}`;

  return {
    metadataBase: new URL(siteUrl),

    title: currentSeo.title,

    description: currentSeo.description,

    alternates: {
      canonical: url,

      languages: {
        ru: `${siteUrl}/ru/services/${currentCategory}`,
        en: `${siteUrl}/en/services/${currentCategory}`,
        uz: `${siteUrl}/uz/services/${currentCategory}`,
        "x-default": `${siteUrl}/ru/services/${currentCategory}`,
      },
    },

    openGraph: {
      title: currentSeo.title,
      description: currentSeo.description,
      url,
      siteName: "Damir Registan",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { category } = await params;

  const service = await getServiceByCategory(category);

  if (!service) {
    notFound();
  }

  const packages = await getPackages(category);
  const gallery = await getGalleryByCategory(category);

  return (
    <main
      className="
        mt-[70px]
        min-h-screen
        w-full
        overflow-hidden
        sm:mt-[80px]
        md:mt-[100px]
      "
    >
      <ServiceDetail
        service={service}
        packages={packages}
        gallery={gallery}
      />
    </main>
  );
}