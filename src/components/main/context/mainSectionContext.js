import { createContext, useContext, useState } from "react";

const MainSectionContext = createContext();

export const useMainSection = () => useContext(MainSectionContext);

export const MainSectionProvider = ({ children, scrollToSection, navConfig, isDesktop }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  const handleHover = (itemName) => setHoveredItem(itemName);

  const handleClick = (item) => {
    // ...tu lógica de click aquí, puedes recibir scrollToSection, isDesktop, etc.
  };

  return (
    <MainSectionContext.Provider
      value={{
        hoveredItem,
        setHoveredItem,
        clickedItem,
        setClickedItem,
        handleHover,
        handleClick,
        navConfig,
        isDesktop,
        scrollToSection,
      }}
    >
      {children}
    </MainSectionContext.Provider>
  );
};