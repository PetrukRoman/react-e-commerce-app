import classes from "./Button.module.css";
const ButtonIcon = ({ children, ...props }) => {
  return (
    <button {...props} className={classes["btn-icon"]}>
      {children}
    </button>
  );
};

export default ButtonIcon;
