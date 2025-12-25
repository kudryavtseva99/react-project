import styles from "./Paginator.module.css";
import { useState } from "react";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 15,
}) => {
  const maxPages = 100;

  let realPagesCount = Math.ceil(totalItemsCount / pageSize);

  let pagesCount = Math.min(realPagesCount, maxPages);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && (
        <button
          className={styles.navButton}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          ←
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => (
          <span
            key={p}
            className={`${styles.pageNumber} ${
              currentPage === p ? styles.selectedPage : ""
            }`}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </span>
        ))}

      {portionNumber < portionCount && (
        <button
          className={styles.navButton}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          →
        </button>
      )}
    </div>
  );
};

export default Paginator;
