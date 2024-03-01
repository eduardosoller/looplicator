import styles from "./styles.module.css";
import Card from "@/components/Card/Card";
import CardsSkeleton from "./components/Skeleton";
import { useGetProducts } from "hooks/useGetProducts";
export default function FeaturedProducts({ limit = 12 }: { limit?: number }) {
  const { data, error } = useGetProducts({
    limit: limit,
    page: 1,
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
      </div>
    </section>
  );
}
