import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { changeQuantity, removeFromCart } from "../../store/cartSlice";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Features from "../../components/Features/Features";
import { currencyFormatter } from "../../util/currencyFormat";
import classes from "./CartPage.module.css";
import Input from "../../components/UI/Input/Input";
import CartItem from "./CartItem";
import ButtonIcon from "../../components/UI/Buttons/ButtonIcon";

const CartPage = () => {
  const { items, subTotal } = useSelector((state) => state.cart);
  const dispath = useDispatch();

  const handleChangeQuantity = (event, id) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const quantity = +formData.get("quantity");

    return dispath(changeQuantity({ id, quantity }));
  };

  const handleRemoveFromCart = (id) => {
    return dispath(removeFromCart(id));
  };
  return (
    <>
      <BreadCrumbs />

      <div className={classes.row}>
        <div className={classes.tableWrapper}>
          {items.length !== 0 ? (
            <table className={classes.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{currencyFormatter(item.price)}</td>
                    <td>
                      <form onSubmit={(event) => handleChangeQuantity(event, item.id)}>
                        <Input id="quantity" name="quantity" type="number" min={1} max={10} defaultValue={item.quantity} readOnly />
                      </form>
                    </td>
                    <td>{currencyFormatter(item.price * item.quantity)}</td>
                    <td>
                      <ButtonIcon onClick={() => handleRemoveFromCart(item.id)}>
                        <AiFillDelete />
                      </ButtonIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Cart is emty</p>
          )}
        </div>

        <ul className={classes.mobile}>
          {items.length !== 0 ? (
            items.map((item) => {
              return (
                <li key={item.id}>
                  <CartItem item={item} handleChangeQuantity={handleChangeQuantity} handleRemoveFromCart={handleRemoveFromCart} />
                </li>
              );
            })
          ) : (
            <li>
              <p>Cart is empty</p>
            </li>
          )}
        </ul>
        <div className={classes.total}>
          <h2>Cart Total</h2>
          <p>
            Subtotal <span>{currencyFormatter(subTotal)}</span>
          </p>
          <p>
            Total <strong>{currencyFormatter(subTotal)}</strong>
          </p>
          <Link to="/checkout">Check out</Link>
        </div>
      </div>

      <Features />
    </>
  );
};
export default CartPage;
