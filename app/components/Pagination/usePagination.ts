import { useState, useEffect } from "react";

export const usePagination = (props: any) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number>();

  useEffect(() => {
    console.log('usePagination(limit)', props.limit)
    setLimit(props.limit)
  }, [props.limit]);

  useEffect(() => {
    console.log('usePagination(page)', page)
  }, [page]);

  const changePage = (pN: number) => {
    if (pN > 0) setPage(pN);
  };
  const nextPage = () => {
    setPage(current => current + 1);
  };

  const previousPage = () => {
    setPage(current => current - 1);
  };
  return {
    page,
    limit,
    setLimit,
    changePage,
    nextPage,
    previousPage,
  };
}