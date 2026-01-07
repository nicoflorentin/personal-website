import { useState } from "react";
import { scroller } from "react-scroll";

export const useScrollToSection = (initialTab = "about") => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const scrollToSection = (sectionName) => {
    if (sectionName === "about" || sectionName === "projects") {
      setActiveTab(sectionName);
      scroller.scrollTo("portfolio", {
        duration: 800,
        smooth: true,
      });
    } else {
      scroller.scrollTo(sectionName, {
        duration: 800,
        smooth: true,
      });
    }
  };

  return { activeTab, setActiveTab, scrollToSection };
};
