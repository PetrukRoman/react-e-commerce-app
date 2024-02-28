import { Link } from "react-router-dom";

import Carousel from "../UI/Carousel/Carousel";
import firstImg from "../../assets/15.jpg";
import secondImg from "../../assets/16.jpg";
import thirdImg from "../../assets/17.jpg";
import RightArrow from "../../assets/right-arrow.svg";
import classes from "./Inspiration.module.css";

const Inspiration = () => {
  return (
    <section className={classes.section}>
      <div className={classes.hero}>
        <h3>50+ Beautiful rooms inspiration</h3>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <Link to="/">Explore more</Link>
      </div>
      <div className={classes.carouselWrapper}>
        <Carousel slidesPerView={2.2} pagination spaceBetween={30} effect="scale">
          <Carousel.Content>
            <Carousel.Item index="0">
              <img src={firstImg} alt="Kitchen img" />
              <Carousel.Item.Content>
                <div className={classes.inner}>
                  <div className={classes["inner-text"]}>
                    <p>01 &mdash; Bed Room</p>
                    <h3>Inner Peace</h3>
                  </div>
                  <Link to="/">
                    <img src={RightArrow} alt="right-arrow" />
                  </Link>
                </div>
              </Carousel.Item.Content>
            </Carousel.Item>
            <Carousel.Item index="1">
              <img src={secondImg} alt="Kitchen img" />
              <Carousel.Item.Content>
                <div className={classes.inner}>
                  <div className={classes["inner-text"]}>
                    <p>02 &mdash; Living d Room</p>
                    <h3>Inner Peace</h3>
                  </div>
                  <Link to="/">
                    <img src={RightArrow} alt="right-arrow" />
                  </Link>
                </div>
              </Carousel.Item.Content>
            </Carousel.Item>
            <Carousel.Item index="2">
              <img src={thirdImg} alt="Kitchen img" />
              <Carousel.Item.Content>
                <div className={classes.inner}>
                  <div className={classes["inner-text"]}>
                    <p>03 &mdash; Dining</p>
                    <h3>Inner Peace</h3>
                  </div>
                  <Link to="/">
                    <img src={RightArrow} alt="right-arrow" />
                  </Link>
                </div>
              </Carousel.Item.Content>
            </Carousel.Item>
          </Carousel.Content>
        </Carousel>
      </div>
    </section>
  );
};

export default Inspiration;
