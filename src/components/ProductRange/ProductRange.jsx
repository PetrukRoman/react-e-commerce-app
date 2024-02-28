import HeadingSection from "../HeadingSection/HeadingSection";
import classes from "./ProductRange.module.css";
import DiningImg from "../../assets/dining.png";
import LivingImg from "../../assets/living.png";
import BedroomImg from "../../assets/bedroom.png";
const ProductRange = () => {
  return (
    <section>
      <HeadingSection heading="Browse the range" subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

      <div className={classes.container}>
        <div className={classes.row}>
          <article className={classes.card}>
            <figure>
              <img src={DiningImg} alt="dinning room" />
            </figure>
            <p>Dining</p>
          </article>
          <article className={classes.card}>
            <figure>
              <img src={LivingImg} alt="Living room" />
            </figure>
            <p>Living</p>
          </article>
          <article className={classes.card}>
            <figure>
              <img src={BedroomImg} alt="Bedroom" />
            </figure>
            <p>Bedroom</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
