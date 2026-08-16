"use client";

import { useLocale } from "next-intl";

const content = {
  ru: {
    label: "Фотограф в Самарканде",
    title: "Фотограф, который сохраняет ваши моменты",
    paragraphs: [
      "Damir Registan — профессиональный фотограф в Самарканде. Провожу индивидуальные, семейные, романтические и тематические фотосессии для жителей города и гостей Узбекистана.",
      
      "Самарканд — город с уникальной архитектурой, древними улицами и особенной атмосферой. Для каждой съёмки мы подбираем локации, которые подходят именно вашей истории: от исторического центра до современных и уютных мест города.",
      
      "Если вы ищете фотографа в Самарканде для Love Story, семейной фотосессии, индивидуальной съёмки или фотографий в национальных образах, мы заранее обсудим идею, стиль и подходящие места.",
    ],
    placesTitle: "Фотосессия в красивых местах Самарканда",
    places:
      "Регистан, старинные улицы, архитектура исторического центра и другие атмосферные места Самарканда позволяют создавать фотографии, которые передают характер города и эмоции человека.",
  },

  en: {
    label: "Photographer in Samarkand",
    title: "A photographer who captures your moments",
    paragraphs: [
      "Damir Registan is a professional photographer in Samarkand, Uzbekistan. I offer individual, family, romantic and themed photo sessions for both local residents and visitors to Uzbekistan.",

      "Samarkand is a unique city with historic architecture, ancient streets and a distinctive atmosphere. For every photoshoot, we choose locations that match your story — from the historic center to modern and intimate places around the city.",

      "If you are looking for a photographer in Samarkand for a Love Story, family photoshoot, individual session or traditional Uzbek costume photography, we will discuss the idea, style and locations in advance.",
    ],
    placesTitle: "Beautiful places for a photoshoot in Samarkand",
    places:
      "Registan Square, historic streets, traditional architecture and other atmospheric locations in Samarkand create the perfect setting for photographs that capture both the character of the city and your emotions.",
  },

  uz: {
    label: "Samarqandda fotograf",
    title: "Lahzalaringizni suratlarda saqlaydigan fotograf",
    paragraphs: [
      "Damir Registan — Samarqanddagi professional fotograf. Mahalliy aholi va O‘zbekistonga tashrif buyuradigan mehmonlar uchun individual, oilaviy, romantik va tematik fotosessiyalar o‘tkazaman.",

      "Samarqand o‘zining qadimiy me’morchiligi, tarixiy ko‘chalari va o‘ziga xos muhiti bilan ajralib turadi. Har bir fotosessiya uchun sizning hikoyangizga mos lokatsiyalarni tanlaymiz — tarixiy markazdan tortib zamonaviy va sokin joylargacha.",

      "Agar siz Samarqandda Love Story, oilaviy, individual yoki milliy liboslardagi fotosessiya uchun fotograf izlayotgan bo‘lsangiz, oldindan g‘oya, uslub va mos lokatsiyalarni birgalikda tanlaymiz.",
    ],
    placesTitle: "Samarqanddagi chiroyli fotosessiya joylari",
    places:
      "Registon maydoni, qadimiy ko‘chalar, tarixiy me’morchilik va Samarqandning boshqa betakror joylari shahar ruhini va insonning samimiy his-tuyg‘ularini aks ettiruvchi suratlar yaratish imkonini beradi.",
  },
} as const;

export default function SeoBlock() {
  const locale = useLocale() as keyof typeof content;
  const data = content[locale] ?? content.ru;

  return (
    <section
      className="
        mt-20
        border-t
        border-neutral-200
        bg-[#f5f3f0]
        px-5
        py-16
        dark:border-neutral-800
        dark:bg-neutral-950
        sm:mt-28
        sm:px-8
        sm:py-20
        lg:mt-32
        lg:px-10
        lg:py-24
      "
    >
      <div className="mx-auto max-w-4xl">

        {/* Label */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />

          <span
            className="
              font-[var(--font-manrope)]
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-neutral-500
              dark:text-neutral-400
            "
          >
            {data.label}
          </span>
        </div>

        {/* Title */}
        <h2
          className="
            max-w-3xl
            font-[var(--font-cormorant)]
            text-4xl
            font-medium
            leading-[1]
            tracking-tight
            text-neutral-900
            dark:text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          {data.title}
        </h2>

        {/* Text */}
        <div
          className="
            mt-8
            space-y-5
            font-[var(--font-manrope)]
            text-sm
            font-light
            leading-7
            text-neutral-600
            sm:text-base
            sm:leading-8
            dark:text-neutral-400
          "
        >
          {data.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Places */}
        <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h3
            className="
              font-[var(--font-cormorant)]
              text-2xl
              font-medium
              text-neutral-900
              dark:text-white
              sm:text-3xl
            "
          >
            {data.placesTitle}
          </h3>

          <p
            className="
              mt-4
              font-[var(--font-manrope)]
              text-sm
              font-light
              leading-7
              text-neutral-600
              sm:text-base
              sm:leading-8
              dark:text-neutral-400
            "
          >
            {data.places}
          </p>
        </div>

      </div>
    </section>
  );
}