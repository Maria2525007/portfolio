import Header from "@/components/Header";
import HeroA from "@/components/HeroA";
import MobileCta from "@/components/MobileCta";
import PageBody from "@/components/PageBody";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroA />
        <PageBody />
      </main>
      <MobileCta />
      <Reveal />
    </>
  );
}
