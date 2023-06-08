import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "../../../styles/main pages/home page/services_Desktop.module.scss";

const ServicesDescription = ({
  title,
  isActive,
  shortContent,
  parentLink,
  link,
  onChangeIndex,
}) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setHeight("11vw");
    } else setHeight(0);
  }, [isActive]);

  return (
    <div onClick={onChangeIndex}>
      <h2
        className={`${classes.service_title} +  ${
          isActive ? classes.active_title : ""
        }`}
      >
        {title}
      </h2>
      <div style={{ height }} className={classes.detail_container}>
        <div className={isActive ? classes.active_detail : ""}>
          <p className={classes.short_content}>{shortContent}</p>
          <Link to={`${parentLink}/${link}`} className={classes.link}>
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDescription;
