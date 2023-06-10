import { useDevice } from "../../common/use contexts/DeviceContext";
import Header from "../../common/Header";
import TemplateNavbar from "./TemplateNavbar";
import Description from "./Description";
import Footer from "../../common/Footer";

const TemplatePage = ({
  activeId,
  directoryName,
  title,
  text,
  dataDirectory,
  parentLink,
}) => {
  const isMobile = useDevice();

  const aboutUsHeaderText = isMobile ? (
    <h2 style={{ fontSize: "5.5vw", marginTop: "10vh" }}>
      Quality is a habit, not an act.
    </h2>
  ) : (
    <h2 style={{ fontSize: "2.1vw", marginTop: "6vw" }}>
      Quality is a habit, not an act.
    </h2>
  );

  return (
    <>
      <Header>{aboutUsHeaderText}</Header>
      <div style={{ display: isMobile ? "block" : "flex" }}>
        <TemplateNavbar
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
