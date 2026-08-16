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

const seo = {
  ru: {
    meeting: {
      title: "Фотограф в Самарканде — Встреча с фотографом | Damir Registan",
      description:
        "Встреча с профессиональным фотографом в Самарканде. Обсудим идею фотосессии, выберем локацию и создадим красивые фотографии.",
    },

    lovestory: {
      title: "Love Story фотосессия в Самарканде | Damir Registan",
      description:
        "Романтическая Love Story фотосессия в Самарканде. Естественные фотографии для пар, красивые локации и профессиональная съёмка.",
    },

    family: {
      title: "Семейный фотограф в Самарканде | Damir Registan",
      description:
        "Семейная фотосессия в Самарканде с профессиональным фотографом. Тёплые, естественные фотографии вашей семьи в красивых локациях.",
    },

    national: {
      title: "Фотосессия в национальных образах в Самарканде | Damir Registan",
      description:
        "Профессиональная фотосессия в национальных образах в Самарканде. Красивые фотографии в традиционной одежде и атмосферных локациях города.",
    },
  },

  en: {
    meeting: {
      title: "Photographer in Samarkand — Meeting | Damir Registan",
      description:
        "Meet a professional photographer in Samarkand. Discuss your photoshoot idea, choose a beautiful location and create memorable photographs.",
    },

    lovestory: {
      title: "Love Story Photoshoot in Samarkand | Damir Registan",
      description:
        "Romantic Love Story photoshoot in Samarkand. Natural couple photography, beautiful locations and professional photography.",
    },

    family: {
      title: "Family Photographer in Samarkand | Damir Registan",
      description:
        "Professional family photoshoot in Samarkand. Warm and natural family photographs in beautiful locations around the city.",
    },

    national: {
      title: "National Costume Photoshoot in Samarkand | Damir Registan",
      description:
        "Professional photoshoot in traditional Uzbek costumes in Samarkand. Beautiful photographs in authentic outfits and atmospheric locations.",
    },
  },

  uz: {
    meeting: {
      title: "Samarqandda fotograf — Uchrashuv | Damir Registan",
      description:
        "Samarqandda professional fotograf bilan uchrashuv. Fotosessiya g‘oyasini muhokama qilamiz, chiroyli joy tanlaymiz va unutilmas suratlar yaratamiz.",
    },

    lovestory: {
      title: "Samarqandda Love Story fotosessiyasi | Damir Registan",
      description:
        "Samarqandda romantik Love Story fotosessiyasi. Juftliklar uchun tabiiy suratlar, chiroyli lokatsiyalar va professional fotografiya.",
    },

    family: {
      title: "Samarqandda oilaviy fotograf | Damir Registan",
      description:
        "Samarqandda professional oilaviy fotosessiya. Oilangizning samimiy va iliq lahzalarini shaharning chiroyli joylarida suratga olamiz.",
    },

    national: {
      title: "Samarqandda milliy liboslarda fotosessiya | Damir Registan",
      description:
        "Samarqandda milliy o‘zbek liboslarida professional fotosessiya. An’anaviy kiyimlar va shaharning go‘zal joylarida chiroyli suratlar.",
    },
  },
} as const;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, category } = await params;

  const localeSeo =
    seo[locale as keyof typeof seo];

  const currentSeo =
    localeSeo?.[category as keyof typeof localeSeo];

  if (!currentSeo) {
    return {};
  }

  const baseUrl = "https://damirregistan.com";
  const url = `/${locale}/services/${category}`;

  return {
    title: currentSeo.title,
    description: currentSeo.description,

    alternates: {
      canonical: url,

      languages: {
        ru: `/ru/services/${category}`,
        en: `/en/services/${category}`,
        uz: `/uz/services/${category}`,
        "x-default": `/ru/services/${category}`,
      },
    },

    openGraph: {
      title: currentSeo.title,
      description: currentSeo.description,
      url: `${baseUrl}${url}`,
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