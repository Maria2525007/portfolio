import HeroA from "@/components/HeroA";
import PageBody from "@/components/PageBody";
import SiteHeader from "@/components/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader variant="a" />
      <HeroA />
      <PageBody />
    </>
  );
}
