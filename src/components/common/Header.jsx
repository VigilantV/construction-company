import { Fragment } from "react";

import classes from "../../styles/common/header.module.scss";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}></div>
      <div className={classes.header_text}>
        <h1 className={classes.first_title}> Main Name </h1>
        <h2 className={classes.second_title}> Construction Company </h2>
        <p className={classes.address}>
          West unit, Third floor, No.17, 2nd st., Navvab Ave,
          <br /> TEHRAN, IRAN
        </p>
        <p className={classes.address}> P.O. Box: 1234567891 </p>
        <div className={classes.links}>
          <p> (+98) 21 12345678 </p>
          <br />
          <p> example@gmail.com </p>
        </div>
      </div>
      <div className={classes.diagonal_shadow}></div>
    </Fragment>
  );
};

export default Header;
