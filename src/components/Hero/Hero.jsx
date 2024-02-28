import { Link } from "react-router-dom";

import classes from "./Hero.module.css";
import bannerImg from "../../assets/big-banner.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Hero = () => {
  return (
    <section>
      <div className={classes.banner}>
        <LazyLoadImage src={bannerImg} effect="blur" alt="big-banner" height="100%" width="100%" />

        <div className={classes.hero}>
          <p className={classes.arrival}>New Arrival</p>
          <h1>
            Discover Our <br /> New Collection
          </h1>
          <p className={classes["hero-text"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ducimus quod dolorum suscipit vel commodi ipsa mollitia asperiores
          </p>
          <div>
            <Link to="/shop" className={classes["hero-btn"]}>
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
