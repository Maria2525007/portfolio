import { Header } from "@/components/Header";
import { HeroA } from "@/components/HeroA";
import { Sections } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroA />
        <Sections variant="a" />
      </main>
    </>
  );
}
