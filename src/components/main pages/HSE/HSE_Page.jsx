import { useDevice } from "../../common/use contexts/DeviceContext";
import Header from "../../common/Header";
import HSE_Section from "./HSE_Section";
import Footer from "../../common/Footer";

const HSE_Page = () => {
  const isMobile = useDevice();

  const aboutUsHeaderText = isMobile ? (
    <h2 style={{ fontSize: "5vw", marginTop: "10vh" }}>
      Offer the highest quality
      <br /> to clients is our prime directive.
    </h2>
  ) : (
    <h2 style={{ fontSize: "2vw", marginTop: "6vw" }}>
      Offer the highest quality
      <br /> to clients is our prime directive.
    </h2>
  );

  return (
    <>
      <Header>{aboutUsHeaderText}</Header>
      <HSE_Section />
      <Footer />
    </>
  );
};

export default HSE_Page;
