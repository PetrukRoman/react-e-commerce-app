import { createContext, useContext, useState, useRef, useEffect } from "react";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useViewPort } from "../../../hooks/useViewport";
import classes from "./Carousel.module.css";

const CarouselContext = createContext({
  currentIndex: null,
  items: [],
  translate: 0,
  addNewSlide: () => {},
  nextSlide: () => {},
});

const SlideContext = createContext({
  index: null,
});

const Carousel = ({ children, spaceBetween, slidesPerView, pagination, effect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [startPosition, setStartPosistion] = useState(null);
  const [transition, setTransition] = useState("0.4s");
  const { width } = useViewPort();
  const slidesRef = useRef([]);

  const slidesCount = slidesPerView && width > 750 ? slidesPerView : 1;

  const gap = slidesCount === 1 ? 0 : spaceBetween ?? 10;

  const handleonStartMove = (event) => {
    setStartPosistion(event.touches[0].clientX);
  };

  const handleEndMove = (event) => {
    const deltaX = event.changedTouches[0].clientX - startPosition;
    const widthSlide = slidesRef.current[0].offsetWidth;
    setTransition("0.4s");
    if (deltaX > 0) {
      //right swipe
      if (currentIndex !== 0) setTranslate((prevState) => prevState - widthSlide);

      setCurrentIndex((prevIndex) => {
        return prevIndex === 0 ? 0 : prevIndex - 1;
      });
    } else if (deltaX < 0) {
      //left swipe

      if (currentIndex !== slidesRef.current.length - 1) setTranslate((prevState) => prevState + widthSlide);

      setCurrentIndex((prevIndex) => {
        return prevIndex === slidesRef.current.length - 1 ? prevIndex : prevIndex + 1;
      });
    }
  };

  const nextSlide = () => {
    if (slidesRef.current.length - 1 === currentIndex) {
      return;
    } else {
      setTranslate((prevState) => prevState + slidesRef.current[0].offsetWidth + gap);
    }
    setTransition("0.4s");

    setCurrentIndex((prevIndex) => {
      return slidesRef.current.length - 1 === prevIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      return;
    } else {
      setTranslate((prevState) => prevState - (slidesRef.current[0].offsetWidth + gap));
    }
    setTransition("0.4s");
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? 0 : prevIndex - 1;
    });
  };

  const setCurrentItem = (index) => {
    setTransition("0s");
    setTranslate(index * (slidesRef.current[0].offsetWidth + gap));
    setCurrentIndex(index);
  };

  const carouselCtx = {
    currentIndex,
    effect,
    nextSlide,
    translate,
    handleonStartMove,
    handleEndMove,
    setCurrentItem,
    prevSlide,
    transition,
    gap,
    slidesCount,
    pagination,
    slidesRef,
  };
  return (
    <CarouselContext.Provider value={carouselCtx}>
      <div className={classes.carouselWrapper}>{children}</div>
    </CarouselContext.Provider>
  );
};
const CarouselContent = ({ children }) => {
  const { translate, handleonStartMove, handleEndMove, transition, pagination, gap } = useContext(CarouselContext);

  return (
    <div className={classes.carousel}>
      <PrevButton />
      <ul
        onTouchStart={(event) => handleonStartMove(event)}
        onTouchEnd={(event) => handleEndMove(event)}
        id="carousel-content"
        className={classes.content}
        style={{
          transform: `translateX(-${translate}px)`,
          transition: `all ease-out ${transition}`,
          gap: `${gap}px`,
        }}
      >
        {children}
      </ul>
      <NextButton />
      <Pagination visible={pagination} />
    </div>
  );
};

const CarouselSlide = ({ children, index }) => {
  const { slidesCount, gap, slidesRef, effect, currentIndex } = useContext(CarouselContext);

  const isActive = currentIndex === +index;

  const slideCtx = {
    index,
  };

  const width = slidesCount === 1 ? "100%" : `calc(100% / ${slidesCount}  - (${slidesCount - 1} / ${slidesCount} * ${gap ?? 1}px ))`;

  return (
    <SlideContext.Provider value={slideCtx}>
      <li
        ref={(element) => (slidesRef.current[index] = element)}
        id="carousel-slide"
        className={classes.slide}
        style={{
          width: width,
          height: effect && effect === "scale" && !isActive ? "90%" : "100%",
        }}
      >
        {children}
      </li>
    </SlideContext.Provider>
  );
};

const CarouselSlideContent = ({ children }) => {
  const { currentIndex } = useContext(CarouselContext);
  const { index } = useContext(SlideContext);
  const isActive = currentIndex === +index;

  return <div className={isActive ? `${classes["slide-content"]} ${classes["slide-content--active"]}` : classes["slide-content"]}>{children}</div>;
};

const Thumbs = ({ children }) => {
  return <ul className={classes.thumbnails}>{children}</ul>;
};

const ThumbSlide = ({ children, index }) => {
  const { currentIndex, setCurrentItem } = useContext(CarouselContext);

  return (
    <li
      className={currentIndex === index ? `${classes.thumbnailsSlide} ${classes["thumbnailsSlide-active"]} ` : classes.thumbnailsSlide}
      onClick={() => setCurrentItem(+index)}
    >
      {children}
    </li>
  );
};

const Pagination = ({ visible }) => {
  const { slidesRef, currentIndex } = useContext(CarouselContext);
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    setSlideList(slidesRef.current);
  }, [slidesRef]);

  return (
    <ul className={visible ? classes.pagination : ` ${classes.pagination} ${classes.hidePagination}`}>
      {slideList.map((_, index) => {
        const isActive = index === currentIndex;

        return <li className={isActive ? `${classes.bullet} ${classes["active-bullet"]}` : classes.bullet} key={index} style={{}} />;
      })}
    </ul>
  );
};

const NextButton = () => {
  const { nextSlide } = useContext(CarouselContext);
  return (
    <button className={classes["btn-next"]} onClick={nextSlide}>
      <FaChevronRight />
    </button>
  );
};
const PrevButton = () => {
  const { prevSlide } = useContext(CarouselContext);
  return (
    <button className={classes["btn-prev"]} onClick={prevSlide}>
      <FaChevronLeft />
    </button>
  );
};

Carousel.Thumbs = Thumbs;
Thumbs.Slide = ThumbSlide;

Carousel.Content = CarouselContent;
Carousel.Item = CarouselSlide;
CarouselSlide.Content = CarouselSlideContent;

export default Carousel;
