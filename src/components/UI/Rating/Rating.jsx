import { MdOutlineStar } from "react-icons/md";
import { TiStarHalf } from "react-icons/ti";
import classes from "./Rating.module.css";
import { useState } from "react";

const Rating = ({ value, readOnly }) => {
  const [rating, setRating] = useState(0);

  const handleSetRating = (rating) => {
    setRating(rating);
  };

  return (
    <div className={classes.rating}>
      {[...Array(5)].map((_, index) => {
        return (
          <label key={index} className={classes["rating-item"]}>
            <input type="radio" name="Rating" value={`star-${index + 1}`} readOnly={readOnly} />
            {!readOnly && (
              <div className={classes["rating-item-clickable"]} onClick={() => handleSetRating(index + 1)}>
                <MdOutlineStar color={rating >= index + 1 ? "#FFC700" : "#9F9F9F"} />
              </div>
            )}

            {readOnly && (
              <div>
                {value >= index + 1 ? (
                  <MdOutlineStar color="#FFC700" />
                ) : value > index && value < index + 1 ? (
                  <TiStarHalf color="#FFC700" />
                ) : (
                  <MdOutlineStar color="#ffff" />
                )}
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
