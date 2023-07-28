import { useDevice } from "../../common/use contexts/DeviceContext";
import Header from "../../common/Header";
import Welcome from "./Welcome";
import HorizontalScrollBar_Mobile from "./HorizontalScrollBar_Mobile";
import Services_Desktop from "./Services_Desktop";
import Projects_Desktop from "./Projects_Desktop";
import Customers from "./Customers";
import Footer from "../../common/Footer";

import services from "../../../data information/services";
import companyProjects from "../../../data information/companyProjects";

const HomePage = () => {
  const isMobile = useDevice();

  return (
    <>
      <Header />
      <Welcome />
      {isMobile ? (
        <HorizontalScrollBar_Mobile
          title="OUR SERVICES"
          list={services}
          baseURL="/services"
        />
      ) : (
        <Services_Desktop />
      )}
      {isMobile ? (
        <HorizontalScrollBar_Mobile
        title="LATEST PROJECTS"
          list={companyProjects}
          baseURL="/projects/company_projects"
        />
      ) : (
        <Projects_Desktop />
      )}

      <Customers />
      <Footer />
    </>
  );
};

export default HomePage;
