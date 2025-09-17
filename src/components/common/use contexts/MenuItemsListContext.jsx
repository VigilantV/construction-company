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
    if (param === "") {
      const active = showList.find((list) => list.value === 1);
      return active || { key: "", value: 0 };
    }
    const match = showList.find((list) => list.key === param);
    return match || { key: "", value: 0 };
  };

  return (
    <MenuItemsListContext.Provider value={chosenList}>
      <SetMenuItemsListContext.Provider value={setShowList}>
        {children}
      </SetMenuItemsListContext.Provider>
    </MenuItemsListContext.Provider>
  );
};
