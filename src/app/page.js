import Image from "next/image";
import Hero from "@/components/Hero";
import Filter from "@/components/Filter";
import MobileGallery from "@/components/MobileGallery";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <MobileGallery />
      <Filter />
      <Faq />
    </>
  );
}
