import info from "../../data information/companyInformations";

import classes from "../../styles/common/header.module.scss";

const Header = ({ children }) => {
  return (
    <>
      <div className={classes.header}></div>
      <div className={classes.header_text}>
        {children ? (
          <>{children}</>
        ) : (
          <>
            <h1 className={classes.first_title}>{info.firstTitle}</h1>
            <h2 className={classes.second_title}>{info.secondTitle}</h2>
            <p className={classes.address}>{info.address}</p>
            <p className={classes.address}>{info.PO_Box}</p>
            <div className={classes.links}>
              <p style={{ fontSize: "1.3vw" }}>{info.number}</p>
              <br />
              <p style={{ fontSize: "1.3vw" }}>{info.email}</p>
            </div>
          </>
        )}
      </div>
      <div className={classes.diagonal_shadow}></div>
    </>
  );
};

export default Header;
