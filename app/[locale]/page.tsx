
import AboutBlock from '@/components/MainPage/AboutBlock';
import Services from '@/components/MainPage/CardForService';
import Banner from '@/components/MainPage/FirstBlock';
import Process from '@/components/MainPage/ProcessSection';
import Emotion from '@/components/MainPage/SecondBlock';
import Advantages from '@/components/MainPage/WhyMeSection';
import SwipperPage from '@/components/gallery/SwipperComp';
import { getReviews } from '@/lib/reviews';
import ReviewsPage from './reviews/page';
import ScrollToTop from "@/components/ui/ScrollToTop";
import SeoBlock from '@/components/MainPage/SeoBlock';
import StructuredData from '@/components/seo/StructuredData';

export default async function Home() {
  const reviews = await getReviews();
  return (
    <main className=" pt-[100px]">
        <StructuredData />
        
        <Banner />
        <SwipperPage />
        <Emotion />
        <Services />
        <AboutBlock />
        <ReviewsPage />
        <Process />
        <Advantages />

        <ScrollToTop />
        <SeoBlock />
    </main>
  );
}
