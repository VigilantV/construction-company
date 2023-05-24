import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavbarDropdown_Desktop from "./NavbarDropdown_Desktop";

import classes from "../../styles/common/navbar.module.scss";

const NavbarItem_Desktop = ({ item, depthLevel }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const closeHandler = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
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
        <>
          <div
            className={`${classes.navbar_title} ${innerMenuClass}`}
            onClick={() => {
              setIsOpen((prevValue) => !prevValue);
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
        </>
      ) : (
        <div
          className={`${classes.navbar_title} ${innerMenuClass} ${
            depthLevel > 0
              ? classes.navbar_inner_link_title
              : classes.navbar_title_shadow
          }`}
          onClick={() => {
            navigate(item.link);
          }}
        >
          {item.title}
        </div>
      )}
    </li>
  );
};

export default NavbarItem_Desktop;
