import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import { useMenuItemsList } from "../use contexts/MenuItemsListContext";
import { useSetMenuItemsList } from "../use contexts/MenuItemsListContext";
import NavbarSubList_Mobile from "./NavbarSubList_Mobile";

import classes from "../../../styles/common/navbar_Mobile.module.scss";
import forwardArrow from "../../../images/navbar/forward_arrow.png";

const NavbarItem_Mobile = ({
  item,
  setShowParentList,
  resetAllListsDisplay,
}) => {
  const portalElement = document.getElementById("mobile_navbar");

  const navigate = useNavigate();

  const showItemsList = useMenuItemsList();
  const setShowItemsList = useSetMenuItemsList();

  const clickHandler = (value) => {
    setShowItemsList((prevValue) =>
      prevValue.map((param) =>
        param.key === item.title.toLowerCase()
          ? { ...param, value: value }
          : param
      )
    );
  };

  return (
    <div style={{ marginTop: item.title === "HOME" ? "12vh" : "0" }}>
      {item.subMenu ? (
        <>
          <div
            className={`${classes.item_title} ${classes.item_title_list}`}
            onClick={() => {
              setShowParentList(0);
              clickHandler(1);
            }}
          >
            <p>{item.title}</p>
            <img
              className={`${
                showItemsList(item.title.toLowerCase()).value
                  ? classes.arrow_open
                  : classes.arrow_close
              }`}
              src={forwardArrow}
            />
          </div>
          {createPortal(
            <NavbarSubList_Mobile
              title={item.title}
              menu={item.subMenu}
              setShowParentList={setShowParentList}
              clickHandler={clickHandler}
              resetAllListsDisplay={resetAllListsDisplay}
            />,
            portalElement
          )}
        </>
      ) : (
        <div
          className={`${classes.item_title} ${classes.title_inner_link}`}
          onClick={() => {
            resetAllListsDisplay();
            if (item.title === "CONTACT US")
              document
                .getElementById("contact_us")
                .scrollIntoView({ behavior: "smooth" });
            else
              setTimeout(() => {
                navigate(item.link);
              }, 500);
          }}
        >
          {item.title}
        </div>
      )}
    </div>
  );
};

export default NavbarItem_Mobile;
