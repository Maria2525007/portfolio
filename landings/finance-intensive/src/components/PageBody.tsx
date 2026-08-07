import Audience from "./Audience";
import Purchase from "./Purchase";
import Reveal from "./Reveal";
import Schedule from "./Schedule";
import SiteFooter from "./SiteFooter";
import Speaker from "./Speaker";
import Takeaways from "./Takeaways";
import Venue from "./Venue";

/* Everything below the fold is shared by both hero studies. */
export default function PageBody() {
  return (
    <>
      <main>
        <Audience />
        <Schedule />
        <Speaker />
        <Takeaways />
        <Venue />
        <Purchase />
      </main>
      <SiteFooter />
      <Reveal />
    </>
  );
}
