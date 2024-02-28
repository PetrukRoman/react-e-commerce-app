import classes from "./Button.module.css";

const Button = ({ children, variant, ...props }) => {
  let isValidVariant = false;

  if (variant && (variant === "outline" || variant === "fill" || variant === "text")) {
    isValidVariant = true;
  }

  return (
    <button className={isValidVariant ? `${classes.btn}  ${classes[variant.toString()]}` : classes.btn} {...props}>
      {children}
    </button>
  );
};
export default Button;
