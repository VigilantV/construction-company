import Navbar_Desktop from "../../common/Navbar_Desktop";
import Header from "../../common/Header";
import VerticalNavbar from "./VerticalNavbar";
import Description from "./Description";
import Footer from "../../common/Footer";

import classes from "../../../styles/main pages/template page/templatePage.module.scss";

const aboutUsHeaderText = (
  <h2 style={{ fontSize: "2.1vw", marginTop: "6vw" }}>
    Quality is a habit, not an act.
  </h2>
);

const TemplatePage = ({
  activeId,
  directoryName,
  title,
  text,
  dataDirectory,
  parentLink,
}) => {
  return (
    <>
      <Navbar_Desktop />
      <Header>{aboutUsHeaderText}</Header>
      <div className={classes.body_section}>
        <VerticalNavbar
          activeId={activeId}
          directoryName={directoryName}
          dataDirectory={dataDirectory}
          parentLink={parentLink}
        ></VerticalNavbar>
        <Description title={title} text={text} />
      </div>
      <Footer />
    </>
  );
};

export default TemplatePage;
