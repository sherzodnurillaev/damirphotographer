import { useLocale } from "next-intl";

const data = {
  ru: {
    name: "Damir Registan",
    description:
      "Профессиональный фотограф в Самарканде и Узбекистане. Индивидуальные, семейные, Love Story и тематические фотосессии.",
    area: "Самарканд, Узбекистан",
    faq: [
      {
        question: "Где сделать фотосессию в Самарканде?",
        answer:
          "Фотосессию можно провести в историческом центре Самарканда, возле Регистана, на старинных улицах и в других атмосферных локациях города.",
      },
      {
        question: "Сколько стоит фотосессия в Самарканде?",
        answer:
          "Стоимость зависит от выбранного формата и продолжительности съёмки. Доступны разные пакеты услуг.",
      },
      {
        question: "Можно ли провести Love Story фотосессию в Самарканде?",
        answer:
          "Да. Love Story фотосессии проводятся в красивых и атмосферных местах Самарканда.",
      },
      {
        question: "Можно ли сделать фотосессию в национальных образах?",
        answer:
          "Да. Можно организовать фотосессию в традиционных узбекских образах и исторических локациях Самарканда.",
      },
    ],
  },

  en: {
    name: "Damir Registan",
    description:
      "Professional photographer in Samarkand, Uzbekistan. Individual, family, Love Story and themed photo sessions.",
    area: "Samarkand, Uzbekistan",
    faq: [
      {
        question: "Where can I have a photoshoot in Samarkand?",
        answer:
          "Photoshoots can take place in the historic center of Samarkand, near Registan Square, on historic streets and in other atmospheric locations.",
      },
      {
        question: "How much does a photoshoot in Samarkand cost?",
        answer:
          "The price depends on the type and duration of the photoshoot. Different photography packages are available.",
      },
      {
        question: "Can I have a Love Story photoshoot in Samarkand?",
        answer:
          "Yes. Love Story photoshoots are available in beautiful and atmospheric locations throughout Samarkand.",
      },
      {
        question: "Can I have a photoshoot in traditional Uzbek costumes?",
        answer:
          "Yes. Photoshoots can be arranged in traditional Uzbek costumes and historic locations in Samarkand.",
      },
    ],
  },

  uz: {
    name: "Damir Registan",
    description:
      "Samarqand va O‘zbekistondagi professional fotograf. Individual, oilaviy, Love Story va tematik fotosessiyalar.",
    area: "Samarqand, O‘zbekiston",
    faq: [
      {
        question: "Samarqandda qayerda fotosessiya qilish mumkin?",
        answer:
          "Fotosessiyani Samarqandning tarixiy markazida, Registon maydoni yaqinida, qadimiy ko‘chalarda va boshqa chiroyli joylarda o‘tkazish mumkin.",
      },
      {
        question: "Samarqandda fotosessiya qancha turadi?",
        answer:
          "Fotosessiya narxi tanlangan xizmat turi va davomiyligiga bog‘liq. Turli xil xizmat paketlari mavjud.",
      },
      {
        question: "Samarqandda Love Story fotosessiyasi qilish mumkinmi?",
        answer:
          "Ha. Love Story fotosessiyalari Samarqandning chiroyli va o‘ziga xos joylarida o‘tkaziladi.",
      },
      {
        question: "Milliy liboslarda fotosessiya qilish mumkinmi?",
        answer:
          "Ha. Samarqandning tarixiy joylarida an'anaviy o‘zbek milliy liboslarida fotosessiya tashkil qilish mumkin.",
      },
    ],
  },
} as const;

export default function StructuredData() {
  const locale = useLocale() as keyof typeof data;
  const content = data[locale] ?? data.ru;

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: content.name,

    description: content.description,

    url: `https://damirregistan.com/${locale}`,

    areaServed: {
      "@type": "City",
      name: "Samarkand",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Samarkand",
      addressCountry: "UZ",
    },

    serviceType: "Photography",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: content.faq.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}