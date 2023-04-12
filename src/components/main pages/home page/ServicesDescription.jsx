import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ServicesDescription = ({
  title,
  isActive,
  shortContent,
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
      <h2 className={`service_title +  ${isActive ? "active_title" : ""}`}>
        {title}
      </h2>
      <div className="detail_container" style={{ height }}>
        <div className={`${isActive ? "active_detail" : ""}`}>
          <p className="short_content">{shortContent}</p>
          <Link to={link} className="link">
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDescription;
