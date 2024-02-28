import { IoMdClose } from "react-icons/io";
import Input from "../../components/UI/Input/Input";
import ButtonIcon from "../../components/UI/Buttons/ButtonIcon";
import classes from "./CartItem.module.css";
import { currencyFormatter } from "../../util/currencyFormat";
const CartItem = ({ item, handleRemoveFromCart, handleChangeQuantity }) => {
  return (
    <article className={classes.product}>
      <div className={classes.imgContainer}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={classes.summary}>
        <div>
          <span>{currencyFormatter(item.price)}</span>
          <p className={classes.title}>{item.title}</p>
        </div>

        <div>
          <form onSubmit={(event) => handleChangeQuantity(event, item.id)}>
            <Input type="number" id="quantity" name="quantity" min={1} max={10} readOnly defaultValue={item.quantity} />
          </form>
        </div>
      </div>

      <div className={classes.close}>
        <ButtonIcon onClick={() => handleRemoveFromCart(item.id)}>
          <IoMdClose />
        </ButtonIcon>
      </div>
    </article>
  );
};

export default CartItem;
