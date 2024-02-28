import { useMemo } from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ itemsPerPage, length, currentPage, setCurrentPage, siblingCount }) => {
  const viewSiblingCount = siblingCount * 2 + 1;
  const paginationNumbers = useMemo(() => {
    let array = [];
    console.log(Math.ceil(length / itemsPerPage));
    for (let index = 1; index <= Math.ceil(length / itemsPerPage); index++) {
      array.push(index);
    }

    return array;
  }, [itemsPerPage, length]);

  const handlePrev = () => {
    setCurrentPage((prevState) => (prevState !== 1 ? prevState - 1 : prevState));
  };
  const handleNext = () => {
    setCurrentPage((prevState) => (prevState !== paginationNumbers.length ? prevState + 1 : prevState));
  };

  if (paginationNumbers.length === 1) return;

  let viewPaginationNumbers = [];

  if (paginationNumbers.length > viewSiblingCount) {
    if (currentPage >= viewSiblingCount) {
      viewPaginationNumbers = paginationNumbers.slice(currentPage - (siblingCount + 1), currentPage + siblingCount);
    } else {
      viewPaginationNumbers = paginationNumbers.slice(0, viewSiblingCount);
    }
  }
  return (
    <div className={classes.pagination}>
      <ul>
        {paginationNumbers.length > viewSiblingCount && currentPage !== 1 && (
          <li>
            <button onClick={handlePrev} className={classes.button}>
              Prev
            </button>
          </li>
        )}

        {viewPaginationNumbers.map((indexPage) => (
          <li key={indexPage}>
            <button
              onClick={() => setCurrentPage(indexPage)}
              className={
                currentPage === indexPage
                  ? ` ${classes.active} ${classes.button} ${classes["btn-width"]}`
                  : `${classes.button} ${classes["btn-width"]}`
              }
            >
              {indexPage}
            </button>
          </li>
        ))}
        {paginationNumbers.length > viewSiblingCount && currentPage !== paginationNumbers.length && (
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
