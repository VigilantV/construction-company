import { Fragment } from "react";
import "../../styles/common/header.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header"></div>
      <div className="header_text">
        <h1 className="first_title"> Main Name </h1>
        <h2 className="second_title"> Construction Company </h2>
        <p className="address">
          West unit, Third floor, No.17, 2nd st., Navvab Ave,
          <br /> TEHRAN, IRAN
        </p>
        <p className="address"> P.O. Box: 1234567891 </p>
        <div className="links">
          <a href=""> (+98) 21 12345678 </a>
          <br />
          <a href=""> example@gmail.com </a>
        </div>
      </div>
      <div className="diagonal_shadow"></div>
    </Fragment>
  );
};

export default Header;
