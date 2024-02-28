import classes from "./Button.module.css";

const ButtonCta = ({ children, ...props }) => {
  return (
    <button {...props} className={classes["btn-cta"]}>
      {children}
    </button>
  );
};
export default ButtonCta;
