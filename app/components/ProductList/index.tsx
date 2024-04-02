import { useEffect } from "react";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { usePagination } from "@/components/Pagination/usePagination";
import { useGetProducts } from "@/hooks/useGetProducts";
import CardsSkeleton from "./components/Skeleton";
import styles from "./styles.module.css";
import Link from "next/link";
import LinkButton from "../LinkButton";
export default function ProductList({
  limit = 12,
  pagination = false,
  title,
  order,
}: {
  limit?: number;
  title?: string;
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
    <section className={`${styles.product__list}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center py-4">
            {title && (
              <>
                <h4 className={styles.title}>{title}</h4>
                <LinkButton label="VIEW ALL" url="/loops" />
              </>
            )}
          </div>
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
        {pagination && data && (
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
