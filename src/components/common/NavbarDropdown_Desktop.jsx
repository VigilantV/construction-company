import { useState, useEffect } from "react";

import NavbarItem_Desktop from "./NavbarItem_Desktop";

const NavbarDropdown_Desktop = ({ menu, isOpen, depthLevel }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isOpen) setOpacity(1);
    else setOpacity(0);
  }, [isOpen]);

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "navbar_dropdown_sub_menu" : "";
  return (
    <ul style={{ opacity }} className={`navbar_dropdown ${dropdownClass}`}>
      {menu.map((item, index) => (
        <NavbarItem_Desktop key={index} item={item} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default NavbarDropdown_Desktop;
