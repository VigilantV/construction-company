import Header from "../../common/Header";
import AboutUsSection from "./AboutUsSection";
import Footer from "../../common/Footer";
import Certificates from "./Certificates";

const AboutUsPage = () => {
  const headerText = (
    <h2 style={{ fontSize: "2.1vw", lineHeight: "2.7vw", marginTop: "4vw" }}>
      20 Years Of Experiment
      <br /> In The Engineering
      <br /> And Construction
      <br /> From ImaginationTo Reality.
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
