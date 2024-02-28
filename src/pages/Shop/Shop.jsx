import { useState } from "react";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Card from "../../components/UI/Card/Card";
import CardGrid from "../../components/UI/Card/CardGird";
import Pagination from "../../components/UI/Pagination/Pagination";
import ToolBar from "../../components/ToolBar/ToolBar";
import classes from "./Shop.module.css";
import Features from "../../components/Features/Features";
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
const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <BreadCrumbs />
      <ToolBar />
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
      </div>
      <div
        style={{
          marginTop: "3rem",
        }}
      >
        <Pagination itemsPerPage={itemsPerPage} length={250} currentPage={currentPage} setCurrentPage={setCurrentPage} siblingCount={1} />
      </div>
      <Features />
    </>
  );
};
export default Shop;
