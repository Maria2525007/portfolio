import Booking from "./Booking";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Masters from "./Masters";
import Prices from "./Prices";
import Reviews from "./Reviews";
import Visit from "./Visit";
import Works from "./Works";

/** Everything below the fold. Shared verbatim by both hero variants. */
export default function PageBody() {
  return (
    <>
      <Prices />
      <Visit />
      <Masters />
      <Works />
      <Reviews />
      <Contacts />
      <Booking />
      <Footer />
    </>
  );
}
