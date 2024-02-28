import classes from "./Features.module.css";
import cupImg from "../../assets/cup.png";
import guaranteeImg from "../../assets/guarantee.png";
import shippingImg from "../../assets/shipping.png";
import customerSupportImg from "../../assets/customer-support.png";
const Features = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.features}>
          <div className={classes["features-item"]}>
            <img src={cupImg} alt="trophy" />
            <div>
              <p className={classes.heading}>High Quality</p>
              <p className={classes["sub-heading"]}>crafted from top materials</p>
            </div>
          </div>
          <div className={classes["features-item"]}>
            <img src={guaranteeImg} alt="guarantee" />
            <div>
              <p className={classes.heading}>Warranty Protection</p>
              <p className={classes["sub-heading"]}>Over 2 years</p>
            </div>
          </div>
          <div className={classes["features-item"]}>
            <img src={shippingImg} alt="guarantee" />
            <div>
              <p className={classes.heading}>Free Shipping</p>
              <p className={classes["sub-heading"]}>Order over 150 $</p>
            </div>
          </div>
          <div className={classes["features-item"]}>
            <img src={customerSupportImg} alt="guarantee" />
            <div>
              <p className={classes.heading}>24 / 7 Support</p>
              <p className={classes["sub-heading"]}>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
