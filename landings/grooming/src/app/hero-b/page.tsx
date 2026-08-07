import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroB from "@/components/HeroB";
import MobileCta from "@/components/MobileCta";
import PageBody from "@/components/PageBody";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "ВОРС — вариант первого экрана B",
  robots: { index: false, follow: false },
};

export default function HeroBPage() {
  return (
    <>
      <Header />
      <main>
        <HeroB />
        <PageBody />
      </main>
      <MobileCta />
      <Reveal />
    </>
  );
}
