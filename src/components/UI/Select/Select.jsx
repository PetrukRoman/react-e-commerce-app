import classes from "./Select.module.css";

export const Select = ({ id, label, children, ...props }) => {
  return (
    <p className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <div className={classes.selectWrapper}>
        <select className={classes.select} id={id} {...props}>
          {children}
        </select>
      </div>
    </p>
  );
};

export const MenuItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
