import { useDevice } from "../../common/use contexts/DeviceContext";
import Header from "../../common/Header";
import AboutUsSection from "./AboutUsSection";
import Certificates from "./Certificates";
import Footer from "../../common/Footer";

const AboutUsPage = () => {
  const isMobile = useDevice();

  const headerText = isMobile ? (
    <h2 style={{ fontSize: "4vw", lineHeight: "4vh", marginTop: "15vh" }}>
      20 Years Of Experiment In The Engineering
      <br /> And Construction
      <br /> <br /> From Imagination To Reality.
    </h2>
  ) : (
    <h2 style={{ fontSize: "2.1vw", lineHeight: "2.7vw", marginTop: "4vw" }}>
      20 Years Of Experiment
      <br /> In The Engineering
      <br /> And Construction
      <br /> From Imagination To Reality.
    </h2>
  );

  return (
    <>
      <Header>{headerText}</Header>
      <AboutUsSection />
      <Certificates />
      <Footer />
    </>
  );
};

export default AboutUsPage;
