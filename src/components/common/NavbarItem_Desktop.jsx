import { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavbarDropdown_Desktop from "./NavbarDropdown_Desktop";

import classes from "../../styles/common/navbar.module.scss";

const NavbarItem_Desktop = ({ item, depthLevel, parentIsOpen = null }) => {
  const navigate = useNavigate();
  const clickPermission = depthLevel === 0 || parentIsOpen;

  const [cursor, setCursor] = useState("default");

  useEffect(() => {
    if (clickPermission) setCursor("pointer");
    else setCursor("default");
  }, [clickPermission]);

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const closeHandler = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeHandler);
    return () => {
      document.removeEventListener("mousedown", closeHandler);
    };
  }, [isOpen]);

  const innerMenuClass = depthLevel > 0 ? classes.inner_menus_title : "";

  return (
    <li className={classes.navbar_item} ref={ref}>
      {item.subMenu ? (
        <Fragment>
          <div
            style={{ cursor }}
            className={`${classes.navbar_title} ${innerMenuClass}`}
            onClick={() => {
              if (clickPermission) setIsOpen((prevValue) => !prevValue);
            }}
          >
            <p>{item.title}</p>
            {depthLevel === 0 ? (
              <p
                className={`${
                  isOpen ? classes.arrow_open : classes.arrow_close
                }`}
              >
                &#11167;
              </p>
            ) : (
              <p
                className={`${
                  isOpen ? classes.arrow_open : classes.arrow_close
                }`}
              >
                &#11166;
              </p>
            )}
          </div>
          <NavbarDropdown_Desktop
            menu={item.subMenu}
            isOpen={isOpen}
            depthLevel={depthLevel}
          />
        </Fragment>
      ) : (
        <div
          style={{ cursor }}
          className={`${classes.navbar_title} ${innerMenuClass} ${
            depthLevel > 0
              ? classes.navbar_inner_link_title
              : classes.navbar_top_title
          }`}
          onClick={() => {
            if (clickPermission) navigate(item.link);
          }}
        >
          {item.title}
        </div>
      )}
    </li>
  );
};

export default NavbarItem_Desktop;
