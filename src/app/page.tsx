import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionAboutUs } from "@/components/SectionAboutUs";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionOurService } from "@/components/SectionOurService";
import "./globals.css";
import { SectionPublications } from "@/components/SectionPublications";

export default function Home() {
  return (
   <div className="bg-white">
     <div>
      <div className="container">
        <Header />
        <SectionIntro />
        <SectionOurService />
        <SectionAboutUs />
        <SectionPublications />
      </div>
      <Footer />
    </div>
   </div>
  );
}
