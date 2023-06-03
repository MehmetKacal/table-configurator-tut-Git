import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(0);
  const [aluminiumColor, setAluminiumColor] = useState("#f1f0ea");
  const [verandaWidth, setVerandaWidth] = useState(3);
  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        setLegs,
        aluminiumColor,
        setAluminiumColor,
        verandaWidth,
        setVerandaWidth,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
