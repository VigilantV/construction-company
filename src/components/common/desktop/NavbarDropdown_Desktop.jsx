import { useState, useEffect } from "react";

import NavbarItem_Desktop from "./NavbarItem_Desktop";

import classes from "../../../styles/common/navbar_Desktop.module.scss";

const NavbarDropdown_Desktop = ({ menu, isOpen, depthLevel }) => {
  const [opacity, setOpacity] = useState(0);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    let delay;
    if (isOpen) {
      setDisplay("block");
      delay = setTimeout(() => {
        setOpacity(1);
      }, 30);
    } else {
      setOpacity(0);
      delay = setTimeout(() => {
        setDisplay("none");
      }, 1000);
    }
    return () => {
      clearTimeout(delay);
    };
  }, [isOpen, display, opacity]);

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? classes.dropdown_sub_menu : "";

  return (
    <ul
      style={{ display, opacity }}
      className={`${classes.dropdown} ${dropdownClass}`}
    >
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
