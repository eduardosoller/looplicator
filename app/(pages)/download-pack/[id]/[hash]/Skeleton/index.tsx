import styles from "./styles.module.css";
import Skeleton from "@/components/Skeleton";
export default function SingleProductSkeleton() {
  return (
    <div className="row">
      <div className="col-12 col-lg-6 py-5">
        <div className={styles.cover}>
          <Skeleton width="100%" height="100%" />
        </div>
      </div>
      <div className="col-12 col-lg-6 py-5">
        <h3>
          <Skeleton width="100%" height="42px" />
        </h3>
        <p>
          <Skeleton width="100%" height="18px" />
        </p>
        <p>
          <Skeleton width="200px" height="60px" />
        </p>
        <Skeleton width="100%" height="350px" />
      </div>
    </div>
  );
}
