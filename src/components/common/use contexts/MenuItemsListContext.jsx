import { createContext, useContext, useState } from "react";

const MenuItemsListContext = createContext();
const SetMenuItemsListContext = createContext();

export const useMenuItemsList = () => {
  return useContext(MenuItemsListContext);
};

export const useSetMenuItemsList = () => {
  return useContext(SetMenuItemsListContext);
};

export const MenuItemsListProvider = ({ children }) => {
  const [showList, setShowList] = useState([
    { key: "menu items", value: 0 },
    { key: "services", value: 0 },
    { key: "projects", value: 0 },
    { key: "company projects", value: 0 },
    { key: "director projects", value: 0 },
  ]);

  const chosenList = (param = "") => {
    let tempList = { key: "", value: 0 };
    if (param === "") {
      for (let list of showList) {
        {
          if (list.value === 1) {
            tempList = list;
            break;
          }
        }
      }
    } else
      showList.filter((list) => {
        if (list.key === param) tempList = list;
      });
    return tempList;
  };

  return (
    <MenuItemsListContext.Provider value={chosenList}>
      <SetMenuItemsListContext.Provider value={setShowList}>
        {children}
      </SetMenuItemsListContext.Provider>
    </MenuItemsListContext.Provider>
  );
};
