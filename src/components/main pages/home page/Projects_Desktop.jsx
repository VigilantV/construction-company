import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";
import companyProjects from "../../../data information/companyProjects";

import classes from "../../../styles/main pages/home page/projects.module.scss";
import nextArrow from "../../../images/left-arrow.svg";
import prevArrow from "../../../images/right-arrow.svg";

const Projects_Desktop = () => {
  const projectsRef = useRef(null);

  const navigate = useNavigate();

  const renderSlides = () => {
    return companyProjects.map((cardInfo) => (
      <Card
        key={cardInfo.id}
        imgSrc={cardInfo.image}
        title={cardInfo.title}
        content={cardInfo.shortContent}
        onClick={() => navigate(`/projects/company_projects/${cardInfo.link}`)}
      />
    ));
  };

  return (
    <div className={classes.projects}>
      <h2 className={classes.projects_title}>LATEST PROJECTS</h2>
      <div className={classes.slider}>
        <img
          className={classes.slider_arrow}
          src={nextArrow}
          alt="next arrow"
          onClick={() => projectsRef.current.slickNext()}
        />
        <div style={{ width: "85vw" }}>
          <Slider
            ref={projectsRef}
            dots={false}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            arrows={false}
          >
            {renderSlides()}
          </Slider>
        </div>

        <img
          className={classes.slider_arrow}
          src={prevArrow}
          alt="prev arrow"
          onClick={() => projectsRef.current.slickPrev()}
        />
      </div>
    </div>
  );
};

export default Projects_Desktop;
