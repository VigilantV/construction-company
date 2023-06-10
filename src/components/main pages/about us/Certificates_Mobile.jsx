import { Fragment, useState, useRef } from "react";
import { createPortal } from "react-dom";

import certificates from "../../../data information/certificates";
import CertificateCard from "../about us/CertificateCard";

import classes from "../../../styles/main pages/about us/certificates_Mobile.module.scss";

const Certificates_Mobile = () => {
  const portalElement = document.getElementById("modal");

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

  const renderScrollBar = () => {
    return certificates.map((certificate) => (
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
    ));
  };

  return (
    <>
      <h2 className={classes.title}>OUR SERVICES</h2>
      <div className={classes.scrollbar_section}>{renderScrollBar()}</div>
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

export default Certificates_Mobile;
