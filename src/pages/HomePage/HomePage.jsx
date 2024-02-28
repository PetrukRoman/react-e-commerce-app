import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import Inspiration from "../../components/Inspiration/Inspiration";
import ProductRange from "../../components/ProductRange/ProductRange";
import Products from "../../components/Products/Products";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductRange />
      <Products />
      <Inspiration />
      <Gallery />
    </>
  );
};

export default HomePage;
