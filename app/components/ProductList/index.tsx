import { useEffect } from "react";
import styles from "./styles.module.css";
import Card from "./components/Card/Card";
import CardsSkeleton from "./components/Skeleton";
import { useGetProducts } from "hooks/useGetProducts";
import { usePagination } from "@/components/Pagination/usePagination";
import Pagination from "@/components/Pagination";
export default function ProductList({
  limit = 12,
  pagination = true,
}: {
  limit: number;
  pagination: boolean;
}) {
  const { page, changePage, nextPage, previousPage } = usePagination(limit);

  const { data, error } = useGetProducts({
    limit: limit,
    page: page,
  });

  useEffect(() => {
    console.log("ProductList(page)", page, limit, data);
  }, [page, limit, data]);
  if (error) return <p className="text-center">Ocorreu um erro.({error})</p>;
  return (
    <section>
      <div className="container">
        <div className={`${styles.product__list} row g-4`}>
          {!data ? (
            <CardsSkeleton total={limit} />
          ) : (
            data.items.map((item: Product, index: number) => (
              <Card
                id={item.id}
                key={index}
                title={item.title}
                cover_url={item.thumbs[280]}
                price={item.price}
              />
            ))
          )}
        </div>
        {pagination === true && data && (
          <div className="row">
            <Pagination
              pageCount={data.pageCount}
              onNextPage={nextPage}
              onPrevPage={previousPage}
              currentPage={page}
              changePage={changePage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
