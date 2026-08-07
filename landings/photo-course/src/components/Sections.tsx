import Pains from "./Pains";
import Program from "./Program";
import Author from "./Author";
import Students from "./Students";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Signup from "./Signup";

/** Everything below the fold. Shared verbatim by both hero variants. */
export default function Sections() {
  return (
    <>
      <Pains />
      <Program />
      <Author />
      <Students />
      <Pricing />
      <Faq />
      <Signup />
    </>
  );
}
