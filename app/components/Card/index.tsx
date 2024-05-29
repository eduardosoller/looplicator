import Image from "next/image";
import { secondary } from "@/components/Fonts";
import styles from "./styles.module.css";
import CardButton from "@/components/CardButton";
import { formatCurrency } from "utils/helpers";
export default function Card({
  id,
  title,
  cover_url,
  price,
}: ProductCardProps) {
  return (
    <div className="col col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
      <div className={`${styles.card__wrapper}`}>
        <div className={`${styles.card}`}>
          {price == 0.0 && (
            <div className={`${styles.tag} col`}>
              FREE · FREE · FREE · FREE · FREE
            </div>
          )}
          <div className={`${styles.image} card-image-top`}>
            <Image
              src={cover_url}
              style={{ width: "100%", height: "auto" }}
              alt="cover"
              width={235}
              height={235}
              priority
            />
          </div>
          <div className={styles.body}>
            <h4 className={styles.title}>{title}</h4>
            <p className={`${secondary.className} ${styles.price}`}>
              {formatCurrency(price)}
            </p>
          </div>
          <div className={`${styles.footer}`}>
            <CardButton label="Listen" link={`/pack/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
