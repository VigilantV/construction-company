import { createContext, useContext, useState, useEffect } from "react";

const DeviceContext = createContext();

export const useDevice = () => {
  return useContext(DeviceContext);
};

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 580);

  const windowSizeChangeHandler = () => {
    setIsMobile(window.innerWidth <= 580);
  };

  useEffect(() => {
    window.addEventListener("resize", windowSizeChangeHandler);
    return () => {
      window.removeEventListener("resize", windowSizeChangeHandler);
    };
  }, []);

  return (
    <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
  );
};
