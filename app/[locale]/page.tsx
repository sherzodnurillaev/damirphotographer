
import AboutBlock from '@/components/MainPage/AboutBlock';
import Services from '@/components/MainPage/CardForService';
import Banner from '@/components/MainPage/FirstBlock';
import Process from '@/components/MainPage/ProcessSection';
import Emotion from '@/components/MainPage/SecondBlock';
import SectionFaq from '@/components/MainPage/SectionFaq';
import Advantages from '@/components/MainPage/WhyMeSection';

export default function Home() {
  return (
    <main className="max-w-[1260px] mx-auto pt-[100px]">
        <Banner />
        <Emotion />
        <AboutBlock />
        <Process />
        <Services />
        <Advantages />
        <SectionFaq />
    </main>
  );
}
