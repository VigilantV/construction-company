import menuItems from "../../../data information/menuItems";
import NavbarItem_Desktop from "./NavbarItem_Desktop";

import classes from "../../../styles/common/navbar_Desktop.module.scss";
import mainLogo from "../../../images/main_logo.svg";

const Navbar_Desktop = () => {
  return (
    <nav className={classes.navbar}>
      <img className={classes.navbar_img} src={mainLogo} alt="main logo" />
      <ul className={classes.navbar_items}>
        {menuItems.map((item, index) => {
          const depthLevel = 0;
          return (
            <NavbarItem_Desktop
              key={index}
              item={item}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar_Desktop;
