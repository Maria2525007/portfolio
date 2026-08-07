import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroB } from "@/components/HeroB";
import { Sections } from "@/components/Sections";

export const metadata: Metadata = {
  title: "NOMI S2 — умная кормушка для кошек | вариант первого экрана B",
};

export default function Page() {
  return (
    <>
      <Header tone="ink" />
      <main>
        <HeroB />
        <Sections variant="b" />
      </main>
    </>
  );
}
