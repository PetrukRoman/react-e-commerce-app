import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../store/cartSlice";
import { currencyFormatter } from "../../../util/currencyFormat";
import ChairImg from "../../../assets/chair.png";
import classes from "./Card.module.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  let isNew = false;

  if (item?.label && item.label.includes("New")) {
    isNew = true;
  }
  const handleAddTocart = () => {
    return dispatch(addToCart(item));
  };
  return (
    <article className={classes.card}>
      <Link to={`/shop/${item.id}`}>
        <div className={classes["card-image"]}>
          {item.label && <div className={isNew ? `${classes.label} ${classes.new}` : classes.label}>{item.label}</div>}
          <img src={ChairImg} alt={item.title} />
        </div>

        <div className={classes["card-content"]}>
          <h3>{item.title}</h3>
          <p className={classes.descriptions}>{item.descriptions}</p>
          <div className={classes.row}>
            <span className={classes.price}> {currencyFormatter(item.price)}</span>
            {item?.oldPrice && <span className={classes["old-price"]}>{currencyFormatter(item.oldPrice)}</span>}
          </div>
        </div>
        <div className={classes.backdrop} />
      </Link>

      <button className={classes["btn-add"]} onClick={handleAddTocart}>
        Add to cart
      </button>
    </article>
  );
};
export default Card;
