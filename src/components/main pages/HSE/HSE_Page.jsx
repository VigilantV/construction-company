import Navbar_Desktop from "../../common/Navbar_Desktop";
import Header from "../../common/Header";
import HSE_Section from "./HSE_Section";
import Footer from "../../common/Footer";

const aboutUsHeaderText = (
  <h2 style={{ fontSize: "2vw", marginTop: "6vw" }}>
    Offer the highest quality
    <br /> to clients is our prime directive.
  </h2>
);

const HSE_Page = () => {
  return (
    <>
      <Navbar_Desktop />
      <Header>{aboutUsHeaderText}</Header>
      <HSE_Section />
      <Footer />
    </>
  );
};

export default HSE_Page;
