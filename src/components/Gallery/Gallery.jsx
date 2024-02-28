import HeadingSection from "../HeadingSection/HeadingSection";
import classes from "./Gallery.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import img1 from "../../assets/gallery/gallery-1.jpg";
import img2 from "../../assets/gallery/gallery-2.jpg";
import img3 from "../../assets/gallery/gallery-3.jpg";
import img4 from "../../assets/gallery/gallery-4.jpg";
import img5 from "../../assets/gallery/gallery-5.jpg";
import img6 from "../../assets/gallery/gallery-6.jpg";
import img7 from "../../assets/gallery/gallery-7.jpg";
import img8 from "../../assets/gallery/gallery-8.jpg";
import img9 from "../../assets/gallery/gallery-9.jpg";

const images = [
  { title: "Test 1", src: img1, alt: "test 1" },
  { title: "Test 2", src: img2, alt: "test 2" },
  { title: "Test 3", src: img3, alt: "test 3" },
  { title: "Test 4", src: img4, alt: "test 4" },
  { title: "Test 5", src: img5, alt: "test 5" },
  { title: "Test 6", src: img6, alt: "test 6" },
  { title: "Test 7", src: img7, alt: "test 7" },
  { title: "Test 8", src: img8, alt: "test 8" },
  { title: "Test 9", src: img9, alt: "test 9" },
];

const Gallery = () => {
  return (
    <section className={classes.section}>
      <HeadingSection heading="#FuniroFurniture" subHeading="Share your setup with" />
      <div className={classes.gallery}>
        {images.map((image, index) => {
          return (
            <div key={image.title} className={`${classes.item} ${classes[`item${index + 1}`]}`}>
              <LazyLoadImage alt={image.alt} effect="blur" src={image.src} height="100%" width="100%" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
