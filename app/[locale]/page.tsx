import Blog from "@/components/Blog";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FooterTop from "@/components/FooterTop";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Social from "@/components/Social";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ekdağ | Anasayfa",
  description: "Ekdağ Tesislerini Keşfedin",
  // other metadata
};

export default function Home() {
  return (
   <main>
    <Hero />
    <Feature />
    <News />
    <Social />
     <FeaturesTab />
    {/* <About />  */}
    <Blog />
    <FooterTop />
   </main>
  );
}
