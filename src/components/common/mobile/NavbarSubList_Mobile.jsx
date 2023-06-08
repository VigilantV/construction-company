import NavbarItem_Mobile from "./NavbarItem_Mobile";
import { useMenuItemsList } from "../use contexts/MenuItemsListContext";

import classes from "../../../styles/common/navbar_Mobile.module.scss";

const NavbarSubList_Mobile = ({
  title,
  menu,
  setShowParentList,
  clickHandler,
  resetAllListsDisplay,
}) => {
  const showItemsList = useMenuItemsList();

  return (
    <div
      style={{
        transform: `scale(${showItemsList(title.toLowerCase()).value})`,
      }}
      className={classes.menu}
    >
      <div
        className={`${classes.back_btn} ${classes.item_title}  ${classes.item_title_list}`}
        onClick={() => {
          clickHandler(0);
          setShowParentList(1);
        }}
      >
        <p
          className={`${
            showItemsList(title.toLowerCase()).value
              ? classes.arrow_open
              : classes.arrow_close
          }`}
        >
          &#11166;
        </p>
        <p>BACK</p>
      </div>
      {menu.map((item, index) => {
        return (
          <NavbarItem_Mobile
            key={index}
            item={item}
            setShowParentList={clickHandler}
            resetAllListsDisplay={resetAllListsDisplay}
          />
        );
      })}
    </div>
  );
};

export default NavbarSubList_Mobile;