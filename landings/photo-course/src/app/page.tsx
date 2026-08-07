import Masthead from "@/components/Masthead";
import HeroA from "@/components/HeroA";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <Masthead />
      <main>
        <HeroA />
        <Sections />
      </main>
      <Footer variant="a" />
      <Reveal />
    </>
  );
}
