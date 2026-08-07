import type { Metadata } from "next";
import Masthead from "@/components/Masthead";
import HeroB from "@/components/HeroB";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "СВЕТЛО — курс мобильной фотографии (вариант первого экрана B)",
  description:
    "Тот же курс, другой первый экран: кадр во всю высоту окна и заголовок-лесенка вместо editorial-разворота.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Masthead tone="paper" />
      <main>
        <HeroB />
        <Sections />
      </main>
      <Footer variant="b" />
      <Reveal />
    </>
  );
}
