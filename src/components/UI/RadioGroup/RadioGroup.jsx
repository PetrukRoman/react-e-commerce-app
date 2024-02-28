import classes from "./RadioGroup.module.css";
import { FaCheck } from "react-icons/fa";

const RadioGroup = ({ items, name, handleChange, defaultValue, variant, horizontal }) => {
  let defaultView = true;

  if (variant === "buttons" || variant === "colors") {
    defaultView = false;
  }

  return (
    <div className={classes["radio-group"]}>
      {!defaultView && <p className={classes.heading}>{name}</p>}

      <ul className={horizontal ? classes.horizontal : undefined}>
        {items.map((item) => {
          return (
            <li key={item}>
              <label>
                <input
                  id={name}
                  type="radio"
                  name={name}
                  value={item}
                  onChange={handleChange ? (event) => handleChange(event.target.value) : undefined}
                  defaultChecked={defaultValue === item}
                />
                {defaultView && <span className={classes["default-label"]}>{item}</span>}
                {variant === "buttons" && <span className={classes["button-label"]}>{item}</span>}

                {variant === "colors" && (
                  <span
                    className={classes["color-label"]}
                    style={{
                      backgroundColor: item,
                    }}
                  >
                    {" "}
                    <FaCheck />
                  </span>
                )}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RadioGroup;
