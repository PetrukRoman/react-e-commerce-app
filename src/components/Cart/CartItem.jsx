import { useDispatch } from "react-redux";

import { removeFromCart } from "../../store/cartSlice";
import classes from "./CartItem.module.css";
import { currencyFormatter } from "../../util/currencyFormat";
import { IoIosCloseCircle } from "react-icons/io";
import ButtonIcon from "../UI/Buttons/ButtonIcon";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <article className={classes["cart-item"]}>
      <div className={classes["img-container"]}>
        <img src={item.image} alt={item.title} />
      </div>

      <div>
        <h3>{item.title}</h3>
        <p>
          <strong> {item.quantity} </strong> X <span>{currencyFormatter(item.price)}</span>
        </p>
      </div>
      <ButtonIcon onClick={() => dispatch(removeFromCart(item.id))}>
        <IoIosCloseCircle className={classes.icon} />
      </ButtonIcon>
    </article>
  );
};

export default CartItem;
