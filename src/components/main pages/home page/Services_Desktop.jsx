import { useState, useEffect } from "react";
import ServicesDescription from "./ServicesDescription";
import services from "../../../data information/services";

import classes from "../../../styles/main pages/home page/services.module.scss";

const Services_Desktop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActiveIndex((prevState) => {
        return (prevState + 1) % services.length;
      });
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [activeIndex]);

  const renderServices = () => {
    return services.map((service, index) => (
      <ServicesDescription
        key={service.id}
        title={service.title}
        isActive={activeIndex === index}
        shortContent={service.shortContent}
        link={service.link}
        onChangeIndex={() => setActiveIndex(index)}
      />
    ));
  };

  return (
    <div className={classes.services}>
      <h2 className={classes.services_title}>OUR SERVICES</h2>
      <div className={classes.services_container}>
        <div>{renderServices()}</div>

        <img
          className={classes.service_image}
          src={services[activeIndex].image}
          alt={services[activeIndex].title}
        />
      </div>
    </div>
  );
};

export default Services_Desktop;
