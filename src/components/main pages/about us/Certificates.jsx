import { Fragment, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CertificateCard from "./CertificateCard";
import certificates from "../../../data information/certificates";
import classes from "../../../styles/main pages/about us/certificates.module.scss";
import nextArrow from "../../../images/left-arrow.svg";
import prevArrow from "../../../images/right-arrow.svg";

const Certificates = () => {
  const portalElement = document.getElementById("modal");

  const certificatesRef = useRef(null);

  const [certificateIsShown, setCertificateIsShown] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };

  const clickOrDrag = (e, imageIndex) => {
    const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 10 &&
      mouseUp > window.checkForDrag - 10
    ) {
      document.querySelector(":root").style.setProperty("--scroll", "hidden");
      setCurrentImageIndex(imageIndex);
      setCertificateIsShown(true);
    }
  };

  const hideCertificate = () => {
    document.querySelector(":root").style.setProperty("--scroll", "scroll");
    setCertificateIsShown(false);
  };

  const Backdrop = ({ onHideCertificate }) => {
    return <div className={classes.backdrop} onClick={onHideCertificate}></div>;
  };

  return (
    <>
      <div className={classes.certificate_section}>
        <img
          className={classes.arrow}
          src={nextArrow}
          alt="next arrow"
          onClick={() => certificatesRef.current.slickNext()}
        />
        <div style={{ width: "85vw" }}>
          <Slider
            ref={certificatesRef}
            dots={false}
            slidesToShow={5}
            slidesToScroll={2}
            autoplay={true}
            autoplaySpeed={3000}
            arrows={false}
          >
            {certificates.map((certificate) => (
              <Fragment key={certificate.id}>
                <img
                  className={classes.certificate_img}
                  src={certificate.img}
                  alt={`cetificate ${certificate.id + 1}`}
                  onMouseDown={(e) => {
                    mouseDownCoords(e);
                  }}
                  onMouseUp={(e) => {
                    clickOrDrag(e, certificate.id);
                  }}
                />
              </Fragment>
            ))}
          </Slider>
        </div>
        <img
          className={classes.arrow}
          src={prevArrow}
          alt="prev arrow"
          onClick={() => certificatesRef.current.slickPrev()}
        />
      </div>
      {certificateIsShown &&
        createPortal(
          <Backdrop onHideCertificate={hideCertificate}></Backdrop>,
          portalElement
        )}
      {certificateIsShown &&
        createPortal(
          <CertificateCard
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            onHideCertificate={hideCertificate}
          ></CertificateCard>,
          portalElement
        )}
    </>
  );
};

export default Certificates;
