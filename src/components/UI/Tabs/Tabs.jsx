import classes from "./Tabs.module.css";
import { createContext, useContext, useState } from "react";

const TabContext = createContext({
  currentPage: 0,
  changeCurrentPage: () => {},
});

const useTabContext = () => {
  const context = useContext(TabContext);

  if (!context) {
    return new Error("This is component should use in Tabs component");
  }

  return context;
};
export const Tabs = ({ children, defaultValue }) => {
  const [currentPage, setCurrentPage] = useState(defaultValue);

  const changeCurrentPage = (value) => {
    setCurrentPage(value);
  };

  const tabCtx = {
    currentPage,
    changeCurrentPage,
  };

  return (
    <TabContext.Provider value={tabCtx}>
      <div className={classes.tabs}>{children}</div>
    </TabContext.Provider>
  );
};

export const TabList = ({ children }) => {
  return <div className={classes["tab-list"]}>{children}</div>;
};

export const Tab = ({ value, children }) => {
  const { changeCurrentPage, currentPage } = useTabContext();

  return (
    <button
      onClick={() => changeCurrentPage(value)}
      className={currentPage === value ? `${classes["tab-btn"]} ${classes.active}` : classes["tab-btn"]}
    >
      {children}
    </button>
  );
};
export const TabPanel = ({ value, children }) => {
  const { currentPage } = useTabContext();

  if (currentPage !== value) return;
  return <div className={classes["tab-panel"]}>{children}</div>;
};
