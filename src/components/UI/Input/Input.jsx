import classes from "./Input.module.css";
import { useRef } from "react";

const Input = ({ label, type, name, textarea, ...props }) => {
  const inputRef = useRef();

  const handleMinusClick = () => {
    inputRef.current.stepDown();
    inputRef.current.dispatchEvent(new Event("change"));
  };
  const handlePlusClick = () => {
    inputRef.current.stepUp();
    inputRef.current.dispatchEvent(new Event("change"));
  };

  if (textarea) {
    return (
      <p className={classes.group}>
        {label && <label className={classes.label}> {label} </label>}

        <textarea {...props} className={classes.textarea} />
      </p>
    );
  }
  return (
    <div className={classes.group}>
      {label && <label htmlFor={name}>{label}</label>}

      {type === "number" ? (
        <div className={classes.number}>
          <button className={classes.minus} onClick={handleMinusClick}>
            -
          </button>
          <input {...props} type="number" name={name} className={classes.input} ref={inputRef} />
          <button className={classes.plus} onClick={handlePlusClick}>
            +
          </button>
        </div>
      ) : (
        <input {...props} type={type} name={name} className={classes.input} ref={inputRef} />
      )}
    </div>
  );
};

export default Input;
