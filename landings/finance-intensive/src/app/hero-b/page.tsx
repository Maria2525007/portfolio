import type { Metadata } from "next";
import HeroB from "@/components/HeroB";
import PageBody from "@/components/PageBody";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "РАЗБОР — первый экран, вариант B",
  robots: { index: false },
};

export default function Page() {
  return (
    <>
      <SiteHeader variant="b" />
      <HeroB />
      <PageBody />
    </>
  );
}
