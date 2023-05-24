import certificates from "../../../data information/certificates";

import classes from "../../../styles/main pages/about us/certificates.module.scss";

const CertificateCard = ({
  currentImageIndex,
  setCurrentImageIndex,
  onHideCertificate,
}) => {
  const prevClick = (currentImageIndex, setCurrentImageIndex) => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(certificates.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextClick = (currentImageIndex, setCurrentImageIndex) => {
    if (currentImageIndex === certificates.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className={classes.card}>
      <div className={classes.button_top}>
        <button
          className={classes.button}
          onClick={() => {
            prevClick(currentImageIndex, setCurrentImageIndex);
          }}
        >
          Previous
        </button>
        <p className={classes.counter_text}>
          {currentImageIndex + 1}/{certificates.length}
        </p>
        <button
          className={classes.button}
          onClick={() => {
            nextClick(currentImageIndex, setCurrentImageIndex);
          }}
        >
          Next
        </button>
      </div>
      <img
        className={classes.modal_img}
        src={certificates[currentImageIndex].img}
      ></img>
      <button
        className={`${classes.button} ${classes.button_close}`}
        onClick={onHideCertificate}
      >
        Close
      </button>
    </div>
  );
};

export default CertificateCard;
