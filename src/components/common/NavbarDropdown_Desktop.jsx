import { useState, useEffect } from "react";

import NavbarItem_Desktop from "./NavbarItem_Desktop";

import classes from "../../styles/common/navbar.module.scss";

const NavbarDropdown_Desktop = ({ menu, isOpen, depthLevel }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isOpen) setOpacity(1);
    else setOpacity(0);
  }, [isOpen]);

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? classes.dropdown_sub_menu : "";

  return (
    <ul style={{ opacity }} className={`${classes.dropdown} ${dropdownClass}`}>
      {menu.map((item, index) => (
        <NavbarItem_Desktop
          key={index}
          item={item}
          depthLevel={depthLevel}
          parentIsOpen={opacity}
        />
      ))}
    </ul>
  );
};

export default NavbarDropdown_Desktop;