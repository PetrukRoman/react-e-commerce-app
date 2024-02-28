import classes from "./CardGrid.module.css";

const CardGrid = ({ children }) => {
  return <ul className={classes.grid}>{children}</ul>;
};
export default CardGrid;
