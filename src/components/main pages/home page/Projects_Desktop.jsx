import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";
import companyProjects from "../../../data information/companyProjects";

import classes from "../../../styles/main pages/home page/projects.module.scss";
import leftarrow from "../../../images/left-arrow.svg";
import rightArrow from "../../../images/right-arrow.svg";

const Projects_Desktop = () => {
  const navigate = useNavigate();

  const renderSlides = () => {
    return companyProjects.map((cardInfo) => (
      <Card
        key={cardInfo.id}
        imgSrc={cardInfo.image}
        title={cardInfo.title}
        content={cardInfo.shortContent}
        onClick={() => navigate(cardInfo.link)}
      />
    ));
  };

  const arrow = (src) => {
    // return <img src={src} alt="" />;
    <div
      // className={className}
      style={{  display: "block", background: "red" }}
    />;
  };

  return (
    <div className={classes.projects}>
      <h2 className={classes.projects_title}>LATEST PROJECTS</h2>
      <Slider
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        prevArrow={arrow(leftarrow)}
        nextArrow={arrow(rightArrow)}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default Projects_Desktop;
