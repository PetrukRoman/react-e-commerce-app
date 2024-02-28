import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Features from "../../components/Features/Features";
import Input from "../../components/UI/Input/Input";
import { Select, MenuItem } from "../../components/UI/Select/Select";
import classes from "./CheckoutPage.module.css";
import { currencyFormatter } from "../../util/currencyFormat";
import ButtonCta from "../../components/UI/Buttons/ButtonCta";
import RadioGroup from "../../components/UI/RadioGroup/RadioGroup";
const DUMMY_DATA = [
  {
    id: "item1",
    title: "Asgaard sofa",
    price: 2500,
    quantity: 2,
    image: "https://avatars.steamstatic.com/3bddac79a94d5ff081d405e8e7f0b3796e1b3a87_medium.jpg",
  },
  {
    id: "item2",
    title: "Casaliving Wood",
    price: 15000,
    quantity: 1,
    image: "https://dizajnhome.ru/wp-content/uploads/2018/04/Kak-vyibrat-divan-22.jpg",
  },
];

const CheckOutPage = () => {
  return (
    <>
      <BreadCrumbs />
      <section className={classes.section}>
        <div className={classes.container}>
          <form>
            <div className={classes.row}>
              <div className={classes.col}>
                <h2>Billing details</h2>
                <div className={classes.line}>
                  <Input label="First name" id="firstName" name="firstName" required />
                  <Input label="Last name" id="lastName" name="lastName" required />
                </div>
                <Input label="Company name (Optional)" id="company" name="company" />

                <Select id="country" name="country" label="Country / Region" required>
                  <MenuItem value="">Please choose an option</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="England">England</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                </Select>
                <Input label="Street / address" id="address" name="address" required />
                <Input label="Town / city" id="city" name="city" required />
                <Input label="Province" id="province" name="province" required />

                <Select label="Province" id="province" name="province" required>
                  <MenuItem value="">Please choose an option</MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="England">England</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                </Select>
                <Input label="Zip code" id="code" name="code" required />
                <Input label="Phone" id="phone" name="phone" required />
                <Input label="Email address" id="email" name="email" required />

                <Input label="Aditional information" id="information" name="information" />
              </div>
              <div className={classes.col}>
                <div className={classes.grid}>
                  <p className={classes.title}>Product</p>
                  <p className={classes.title}>Subtotal</p>
                  {DUMMY_DATA.map((item) => {
                    return (
                      <>
                        <p className={classes["product-name"]}>
                          {item.title} <span> x {item.quantity}</span>
                        </p>
                        <p className={classes.price}>{currencyFormatter(item.quantity * item.price)}</p>
                      </>
                    );
                  })}

                  <p>Subtotal</p>
                  <p className={classes.price}>{currencyFormatter(20000)}</p>

                  <p>Total</p>
                  <p className={classes.total}>{currencyFormatter(20000)}</p>
                </div>
                <RadioGroup
                  name="bank-transfer"
                  items={["direct-bank-transfer", "direct-bank", "cash-or-delivery"]}
                  defaultValue={"direct-bank-transfer"}
                />

                <p>
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other
                  purposes described in our <strong>privacy policy.</strong>
                </p>
                <div>
                  <ButtonCta>Place order</ButtonCta>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Features />
    </>
  );
};
export default CheckOutPage;
