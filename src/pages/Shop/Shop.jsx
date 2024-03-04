import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Card from "../../components/UI/Card/Card";
import CardGrid from "../../components/UI/Card/CardGird";
import Pagination from "../../components/UI/Pagination/Pagination";
import ToolBar from "../../components/ToolBar/ToolBar";
import classes from "./Shop.module.css";
import Features from "../../components/Features/Features";
import { getAllProducts } from "../../util/http";
import SkeletonCard from "../../components/UI/Skeleton/SkeletonCard";
import SkeletonToolBar from "../../components/UI/Skeleton/SkeletonToolbar";

const Shop = () => {
  const [viewSetting, setViewSetting] = useState({
    itemsPerPage: 16,
    currentPage: 0,
    sortBy: "",
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", viewSetting],
    queryFn: ({ signal }) =>
      getAllProducts({
        signal,
        viewSetting,
      }),
  });

  useEffect(() => {
    window.scrollTo({
      top: 360,
    });
  }, [viewSetting.currentPage]);

  const handleSetViewSetting = (value, field) => {
    if (field === "itemsPerPage") {
      setViewSetting((prevState) => {
        return { ...prevState, [field]: value, currentPage: 0 };
      });
    } else {
      setViewSetting((prevState) => {
        return { ...prevState, [field]: value };
      });
    }
  };

  console.log(data);
  return (
    <>
      <BreadCrumbs />
      {isPending && !isError && <SkeletonToolBar />}

      {!isPending && !isError && <ToolBar viewSetting={viewSetting} handleSetViewSetting={handleSetViewSetting} count={data.productsCount} />}

      <div className={classes.container}>
        {isError && <h2>{error}</h2>}

        {isPending && !isError && (
          <CardGrid>
            {[...Array(10)].map((_, index) => {
              return (
                <li key={index}>
                  <SkeletonCard />
                </li>
              );
            })}
          </CardGrid>
        )}

        {!isPending && !isError && (
          <CardGrid>
            {data.products.map((product) => {
              return (
                <li key={product.id}>
                  <Card item={product} />
                </li>
              );
            })}
          </CardGrid>
        )}
      </div>
      <div
        style={{
          marginTop: "3rem",
        }}
      >
        {!isPending && (
          <Pagination
            productsCount={data.productsCount}
            page={viewSetting.currentPage}
            itemsPerPage={viewSetting.itemsPerPage}
            handleSetViewSetting={handleSetViewSetting}
            siblingCount={1}
          />
        )}
      </div>
      <Features />
    </>
  );
};
export default Shop;
