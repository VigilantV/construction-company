import Header from "../../common/Header";
import VerticalNavbar from "./VerticalNavbar";
import Description from "./Description";
import Footer from "../../common/Footer";

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
      <Header>{aboutUsHeaderText}</Header>
      <div style={{ display: "flex" }}>
        <VerticalNavbar
          activeId={activeId}
          directoryName={directoryName}
          dataDirectory={dataDirectory}
          parentLink={parentLink}
        />
        <Description title={title} text={text} />
      </div>
      <Footer />
    </>
  );
};

export default TemplatePage;
