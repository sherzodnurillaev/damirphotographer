export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://damirregistan.com/#business",

    name: "Damir Registan",

    description:
      "Professional photographer in Samarkand, Uzbekistan specializing in portrait, family, wedding, Love Story, travel and national costume photography.",

    url: "https://damirregistan.com",

    telephone: "+998951380120",

    image: [
      "https://damirregistan.com/logo/logo.png",
    ],

    priceRange: "$$",

    areaServed: [
      {
        "@type": "City",
        name: "Samarkand",
      },
      {
        "@type": "AdministrativeArea",
        name: "Samarqand Region",
      },
      {
        "@type": "Country",
        name: "Uzbekistan",
      },
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Samarkand",
      addressRegion: "Samarqand Region",
      addressCountry: "UZ",
    },

    sameAs: [
      "https://damirregistan.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}