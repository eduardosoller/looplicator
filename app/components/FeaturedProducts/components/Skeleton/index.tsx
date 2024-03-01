import styles from "./styles.module.css";
import Skeleton from "@/components/Skeleton";
export default function CardsSkeleton({ total }: { total: number }) {
  const card = (key: number) => (
    <div
      key={key}
      className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
    >
      <div className={`${styles.card} card h-100`}>
        <div className={styles.image}>
          <Skeleton width="auto" height="100%" />
        </div>
        <div className="card-body">
          <h4>
            <Skeleton width="100%" height="30px" />
          </h4>
          <p>
            <Skeleton width="50%" height="20px" />
          </p>
          <div className={`${styles.card__footer} card-footer`}>
            <Skeleton width="auto" height="50px" />
          </div>
        </div>
      </div>
    </div>
  );
  function TotalCards() {
    const cards = [];
    for (let i = 0; i < total; i++) {
      cards.push(card(i));
    }
    return cards;
  }
  return <TotalCards />;
}
