import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import CardsSkeleton from "./components/Skeleton";
import styles from "./styles.module.css";
import LinkButton from "../LinkButton";
import { getProducts } from "@/services/product";
export default async function ProductList({
  searchParams,
  limit = 12,
  pagination = false,
  title,
  order,
  viewAllButton = true,
}: {
  searchParams?: { page: number } | undefined;
  limit?: number;
  title?: string;
  pagination?: boolean;
  order?: string;
  viewAllButton?: boolean;
}) {
  const page: number = searchParams?.page ? Number(searchParams.page) : 1;
  const data = await getProducts(limit, page, order);
  return (
    <section className={`${styles.product__list}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center py-4">
            {title && (
              <>
                <h3 className={styles.title}>{title}</h3>
                {viewAllButton && <LinkButton label="VIEW ALL" url="/loops" />}
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
              hasNextPage={data.hasNextPage}
              hasPrevPage={data.hasPrevPage}
              currentPage={data.page}
            />
          </div>
        )}
      </div>
    </section>
  );
}
