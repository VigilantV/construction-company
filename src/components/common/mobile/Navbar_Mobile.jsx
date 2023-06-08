import { useState } from "react";
import { createPortal } from "react-dom";

import menuItems from "../../../data information/menuItems";
import NavbarItem_Mobile from "./NavbarItem_Mobile";
import { useMenuItemsList } from "../use contexts/MenuItemsListContext";
import { useSetMenuItemsList } from "../use contexts/MenuItemsListContext";

import classes from "../../../styles/common/navbar_Mobile.module.scss";

const Navbar_Mobile = () => {
  const portalElement = document.getElementById("mobile_navbar");

  const showItemsList = useMenuItemsList();
  const setShowItemsList = useSetMenuItemsList();

  const [showMenu, setShowMenu] = useState(showItemsList().value);

  showMenu
    ? document.querySelector(":root").style.setProperty("--scroll", "hidden")
    : document.querySelector(":root").style.setProperty("--scroll", "scroll");

  const clickHandler = (value) => {
    setShowItemsList((prevValue) =>
      prevValue.map((param) =>
        param.key === "menu items" ? { ...param, value: value } : param
      )
    );
  };

  const resetAllListsDisplay = () => {
    setShowMenu(0);
    setShowItemsList((prevValue) =>
      prevValue.map((item) => {
        item.value = 0;
        return item;
      })
    );
  };

  return (
    <>
      <div className={classes.menu_wrap}>
        <input
          id="menu_button"
          type="checkbox"
          checked={showMenu}
          className={classes.menu_toggler}
          onChange={() => {
            if (document.getElementById("menu_button").checked) {
              setShowMenu(1);
              clickHandler(1);
            } else {
              resetAllListsDisplay();
            }
          }}
        />
        <div className={classes.menu_hamburger}>
          <div></div>
        </div>
      </div>
      {createPortal(
        <div
          style={{ transform: `scale(${showMenu})` }}
          className={classes.backdrop}
        ></div>,
        portalElement
      )}
      {createPortal(
        <div
          style={{
            transform: `scale(${showItemsList("menu items").value})`,
          }}
          className={classes.menu}
        >
          {menuItems.map((item, index) => {
            return (
              <NavbarItem_Mobile
                key={index}
                item={item}
                setShowParentList={clickHandler}
                resetAllListsDisplay={resetAllListsDisplay}
              />
            );
          })}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Navbar_Mobile;
