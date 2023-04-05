import { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavbarDropdown_Desktop from "./NavbarDropdown_Desktop";

const NavbarItem_Desktop = ({ item, depthLevel }) => {
  const navigate = useNavigate();

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
      // Cleanup the event listener
      document.removeEventListener("mousedown", closeHandler);
    };
  }, [isOpen]);

  const innerMenuClass = depthLevel > 0 ? "navbar_inner_menus_title" : "";

  return (
    <li className="navbar_item" ref={ref}>
      {item.subMenu ? (
        <Fragment>
          <div
            className={`navbar_title ${innerMenuClass}`}
            onClick={() => setIsOpen((prevValue) => !prevValue)}
          >
            <p>{item.title}</p>
            {depthLevel === 0 ? (
              <p className={`navbar_arrow_${isOpen ? "open" : "close"}`}>
                &#11167;
              </p>
            ) : (
              <p className={`navbar_arrow_${isOpen ? "open" : "close"}`}>
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
          className={`navbar_title ${innerMenuClass}`}
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
{
  /* {isCollapsible ? (
        <div>
          <div className="navbar_title" onClick={() => setIsOpen(!isOpen)}>
            <p>{title}</p>
            <p className={`navbar_arrow_${isOpen ? "open" : "close"}`}>&#11167;</p>
          </div>
          <div className={`navbar_collapsible_content`} style={{ height }}>
            <div ref={ref}>{children}</div>
          </div>
        </div>
      ) : (
        <div
          className="navbar_title"
          onClick={() => {
            navigate(link);
          }}
        >
          {title}
        </div>
      )} */
}
