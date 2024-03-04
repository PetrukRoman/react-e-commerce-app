import { useMemo } from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ productsCount, page, itemsPerPage, handleSetViewSetting, siblingCount }) => {
  const viewSiblingCount = siblingCount * 2 + 1;

  const paginationNumbers = useMemo(() => {
    let array = [];
    for (let index = 0; index < Math.ceil(productsCount / itemsPerPage); index++) {
      array.push(index);
    }

    return array;
  }, [itemsPerPage, productsCount]);

  if (itemsPerPage >= productsCount) return;

  const handlePrev = () => {
    let currentPage;
    if (page === 0) {
      currentPage = page;
    } else {
      currentPage = paginationNumbers.length - 1;
    }
    handleSetViewSetting(currentPage, "currentPage");
  };

  const handleNext = () => {
    let currentPage;
    if (page === paginationNumbers.length - 1) {
      currentPage = paginationNumbers.length - 1;
    } else {
      currentPage = page + 1;
    }
    handleSetViewSetting(currentPage, "currentPage");
  };

  let viewPaginationNumbers = paginationNumbers;

  if (paginationNumbers.length > viewSiblingCount) {
    if (page >= viewSiblingCount) {
      viewPaginationNumbers = paginationNumbers.slice(page - (siblingCount + 1), page + siblingCount);
    } else {
      viewPaginationNumbers = paginationNumbers.slice(0, viewSiblingCount);
    }
  }
  return (
    <div className={classes.pagination}>
      <ul>
        {paginationNumbers.length > viewSiblingCount && page !== 1 && (
          <li>
            <button onClick={handlePrev} className={classes.button}>
              Prev
            </button>
          </li>
        )}

        {viewPaginationNumbers.map((indexPage) => (
          <li key={indexPage}>
            <button
              onClick={() => handleSetViewSetting(indexPage, "currentPage")}
              className={
                page === indexPage ? ` ${classes.active} ${classes.button} ${classes["btn-width"]}` : `${classes.button} ${classes["btn-width"]}`
              }
            >
              {indexPage + 1}
            </button>
          </li>
        ))}
        {paginationNumbers.length > viewSiblingCount && page !== paginationNumbers.length && (
          <li>
            <button onClick={handleNext} className={classes.button}>
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Pagination;
