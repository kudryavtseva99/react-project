import styles from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  pagesCount = Math.min(pagesCount, 15);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.page}>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={`${styles.pageItem} ${
              currentPage === p ? styles.selectedPage : ""
            }`}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
