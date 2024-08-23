import AboutSection from "./containers/AboutSection";
import Features from "./containers/FeaturesSection";
import Hero from "./containers/HeroSection";
import CTA from "./containers/CTA";
import MenuSection from "./containers/MenuSection";
import Specials from "./containers/SpecialsSection";

export default function Home() {
  return (
   <main>
      <Hero/>
      <AboutSection/>
      <Specials/>
      <MenuSection/>
      {/* <Features/> */}
      <CTA/>
   </main>
  );
}
