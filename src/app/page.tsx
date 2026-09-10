import { ScrollReveal } from "@/components/scroll-reveal";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Facility } from "@/components/sections/facility";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Membership } from "@/components/sections/membership";
import { Philosophy } from "@/components/sections/philosophy";
import { Programs } from "@/components/sections/programs";
import { Transformations } from "@/components/sections/transformations";
import { Trainers } from "@/components/sections/trainers";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Trainers />
        <Programs />
        <Transformations />
        <Membership />
        <Facility />
        <Location />
      </main>
      <Footer />
      <BackToTop />
      <WhatsappCta />
    </>
  );
}
