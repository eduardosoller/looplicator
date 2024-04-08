"use client";
import { notFound, useRouter } from "next/navigation";
import styles from "./styles.module.css";
import SquareArrowSvg from "@/components/Svg/SquareArrow";
type PaginationProps = {
  currentPage: number;
  pageCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
export default function Pagination({
  currentPage,
  pageCount,
  hasNextPage,
  hasPrevPage,
}: PaginationProps) {
  const router = useRouter();
  function onPrevPage() {
    currentPage - 1 < 1
      ? notFound()
      : router.push("?page=" + (currentPage - 1));
  }
  function onNextPage() {
    currentPage + 1 > pageCount
      ? notFound()
      : router.push("?page=" + (currentPage + 1));
  }
  return (
    <div className="col-12 d-flex justify-content-end">
      <div className={styles.pagination_wrapper}>
        <div className={styles.pagination}>
          <button
            disabled={!hasPrevPage}
            onClick={() => onPrevPage()}
            className={styles.button_pagination__prev}
          >
            <SquareArrowSvg width={30} height={30} color="#084cf9" />
          </button>
          <input
            className={styles.input}
            value={`${currentPage} / ${pageCount}`}
            disabled
          />
          <button
            disabled={!hasNextPage}
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
