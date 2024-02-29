import { useEffect } from "react";
import styles from "./styles.module.css";
import { usePagination } from "./usePagination";
import SquareArrowSvg from "@/components/Svg/SquareArrow";
type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  changePage: (pageNumber: number) => void;
};
export default function Pagination({
  currentPage,
  pageCount,
  onNextPage,
  onPrevPage,
  changePage,
}: PaginationProps) {
  useEffect(() => {
    console.log("Pagination", currentPage);
  }, [currentPage]);

  function handleChangePage(pageNumber: number) {
    if (pageNumber > pageCount) return;
    changePage(pageNumber);
  }

  return (
    <div className="col-12 d-flex justify-content-end">
      <div className={styles.pagination_wrapper}>
        <div className={styles.pagination}>
          <button
            disabled={currentPage <= 1}
            onClick={() => onPrevPage()}
            className={styles.button_pagination__prev}
          >
            <SquareArrowSvg width={30} height={30} color="#084cf9" />
          </button>
          {/* <input
            className={styles.input}
            value={currentPage}
            onChange={(e) => {
              handleChangePage(Number(e.target.value));
            }}
            type="text"
          /> */}
          <input
            className={styles.input}
            value={`${currentPage} de ${pageCount}`}
            disabled
          />
          <button
            disabled={currentPage >= pageCount}
            onClick={() => onNextPage()}
            className={styles.button_pagination__next}
          >
            <SquareArrowSvg width={30} height={30} color="#084cf9" />
          </button>
        </div>
      </div>
    </div>
  );
}
