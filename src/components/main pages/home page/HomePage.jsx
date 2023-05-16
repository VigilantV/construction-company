import Navbar_Desktop from "../../common/Navbar_Desktop";
import Header from "../../common/Header";
import Welcome from "./Welcome";
import Services_Desktop from "./Services_Desktop";
import Projects_Desktop from "./Projects_Desktop";
import Customers from "./Customers";
import Footer from "../../common/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar_Desktop />
      <Header />
      <Welcome />
      <Services_Desktop />
      <Projects_Desktop />
      <Customers />
      <Footer />
    </>
  );
};

export default HomePage;
