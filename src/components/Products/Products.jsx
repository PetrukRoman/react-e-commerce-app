import Card from "../UI/Card//Card";
import CardGrid from "../UI/Card/CardGird";
import HeadingSection from "../HeadingSection/HeadingSection";
import Button from "../UI/Buttons/Button";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "product1",
    title: "Syltherine",
    label: "-30%",
    image: "chair.png",
    descriptions: "Stylish cafe chair ",
    price: 2500,
    oldPrice: 3500,
  },
  {
    id: "product2",
    title: "Leviosa",
    image: "product2.png",
    descriptions: "Stylish cafe chair ",
    price: 2500,
  },
  {
    id: "product3",
    title: "Lolito",
    label: "-50%",
    image: "chair.png",
    descriptions: "Luxury big sofa",
    price: 7000,
    oldPrice: 14000,
  },
  {
    id: "product4",
    title: "Respira",
    label: "New",
    image: "product2.png",
    descriptions: "Outdoor bar table and stool",
    price: 10000,
  },
  {
    id: "product5",
    title: "test",
    label: "New",
    image: "product2.png",
    descriptions: "etsata etaet",
    price: 2000,
  },
];

const Products = () => {
  return (
    <section className={classes.section}>
      <HeadingSection heading="Our Products" />
      <div className={classes.container}>
        <CardGrid>
          {DUMMY_PRODUCTS.map((item) => {
            return (
              <li key={item.id}>
                <Card item={item} />
              </li>
            );
          })}
        </CardGrid>

        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <Button variant="outline">Show More</Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
