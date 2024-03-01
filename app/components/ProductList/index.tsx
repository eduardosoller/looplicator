import { useEffect } from "react";
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination";
import { usePagination } from "@/components/Pagination/usePagination";
import { useGetProducts } from "hooks/useGetProducts";
import CardsSkeleton from "./components/Skeleton";
import styles from "./styles.module.css";
export default function ProductList({
  limit = 12,
  pagination = true,
  order,
}: {
  limit?: number;
  pagination?: boolean;
  order?: string;
}) {
  const { page, changePage, nextPage, previousPage } = usePagination(limit);

  const { data, error } = useGetProducts({
    limit: limit,
    page: page,
    order: order,
  });

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
