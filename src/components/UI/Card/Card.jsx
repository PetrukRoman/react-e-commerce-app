import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { addToCart } from "../../../store/cartSlice";
import { currencyFormatter } from "../../../util/currencyFormat";
import classes from "./Card.module.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTocart = () => {
    return dispatch(addToCart(item));
  };

  return (
    <article className={classes.card}>
      <div className={classes["card-image"]}>
        {item.isNew === 1 && <div className={`${classes.label} ${classes.new}`}>New</div>}
        {item.discount && <div className={classes.label}>{item.discount}</div>}
        <LazyLoadImage src={`http://localhost:3000/${item.imageUrl}`} alt={item.title} width="100%" height="100%" />
      </div>

      <div className={classes["card-content"]}>
        <h3>{item.title}</h3>
        <p className={classes.descriptions}>{item.description}</p>
        <div className={classes.row}>
          <span className={classes.price}> {currencyFormatter(+item.currentPrice)}</span>
          {item.prevPrice && <span className={classes["old-price"]}>{currencyFormatter(+item.prevPrice)}</span>}
        </div>
      </div>
      <div className={classes.backdrop} onClick={() => navigate(`/shop/${item.slug}`)} />

      <button className={classes["btn-add"]} onClick={handleAddTocart}>
        Add to cart
      </button>
    </article>
  );
};
export default Card;
