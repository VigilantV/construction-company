import { useDevice } from "./use contexts/DeviceContext";
import HeaderText from "./HeaderText";

import classes from "../../styles/common/header.module.scss";

const Header = ({ children }) => {
  const isMobile = useDevice();

  return (
    <>
      {isMobile ? (
        <div className={classes.header}>
          <HeaderText children={children} />
        </div>
      ) : (
        <>
          <div className={classes.header}></div>
          <HeaderText children={children} />
        </>
      )}

      {!isMobile && <div className={classes.diagonal_shadow}></div>}
    </>
  );
};

export default Header;
