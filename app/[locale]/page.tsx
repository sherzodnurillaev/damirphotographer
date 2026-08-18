import AboutBlock from "@/components/MainPage/AboutBlock";
import Services from "@/components/MainPage/CardForService";
import Banner from "@/components/MainPage/FirstBlock";
import Process from "@/components/MainPage/ProcessSection";
import Emotion from "@/components/MainPage/SecondBlock";
import Advantages from "@/components/MainPage/WhyMeSection";
import SwipperPage from "@/components/gallery/SwipperComp";
import { getReviews } from "@/lib/reviews";
import ReviewsPage from "./reviews/page";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SeoBlock from "@/components/MainPage/SeoBlock";
import StructuredData from "@/components/seo/StructuredData";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default async function Home() {
  const reviews = await getReviews();

  return (
    <main className="pt-[40px]">

      <StructuredData />

      <ScrollReveal>
        <Banner />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <SwipperPage />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <Emotion />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <Services />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <AboutBlock />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <ReviewsPage />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <Process />
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <Advantages />
      </ScrollReveal>

      <ScrollToTop />

      <ScrollReveal>
        <SeoBlock />
      </ScrollReveal>

    </main>
  );
}