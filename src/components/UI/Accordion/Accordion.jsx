import { createContext, useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

import classes from "./Accordion.module.css";

const AccordionContext = createContext({
  currentId: null,
  handleSetCurrentId: () => {},
});

const AccordionItemContext = createContext({
  id: null,
});

const Accordion = ({ children }) => {
  const [currentId, setCurrentId] = useState(null);

  const handleSetCurrentId = (id) => {
    setCurrentId((prevId) => (prevId === id ? null : id));
  };

  const accordionCtx = {
    currentId,
    handleSetCurrentId,
  };

  return (
    <AccordionContext.Provider value={accordionCtx}>
      <ul className={classes.accordion}>{children}</ul>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, id }) => {
  const itemCtx = {
    id,
  };
  return (
    <AccordionItemContext.Provider value={itemCtx}>
      <li className={classes.accordionItem}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

const AccordionTitle = ({ children }) => {
  const { handleSetCurrentId, currentId } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);

  return (
    <div onClick={() => handleSetCurrentId(id)} className={classes.accordionTitle}>
      {children} {id === currentId ? <FaChevronUp /> : <FaChevronDown />}
    </div>
  );
};

const AccordionPanel = ({ children }) => {
  const { currentId } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);

  if (currentId !== id) return;

  return <div className={classes.accordionPanel}>{children}</div>;
};

Accordion.Item = AccordionItem;
Accordion.Item.Panel = AccordionPanel;
Accordion.Item.Title = AccordionTitle;

export default Accordion;
