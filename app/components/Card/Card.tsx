import Image from "next/image";
import { secondary } from "@/components/Fonts";
import styles from "./styles.module.css";
import CardButton from "../../components/CardButton/CardButton";
export default function Card({
  id,
  title,
  cover_url,
  price,
}: ProductCardProps) {
  return (
    <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
      <div className={`${styles.product__card__wrapper} h-100`}>
        <div className={`${styles.product__card} card h-100`}>
          {price == 0.0 && (
            <div className={`${styles.free} col`}>FREE · FREE · FREE</div>
          )}
          <div className={`${styles.image} card-image-top`}>
            <Image
              src={cover_url}
              style={{ width: "100%", height: "auto" }}
              alt="cover"
              width={235}
              height={235}
              unoptimized
            />
          </div>
          <div className="card-body">
            <h4 className={styles.title}>{title}</h4>
            <p className={`${secondary.className} ${styles.price}`}>
              $ {price}
            </p>
          </div>
          <div className={`${styles.card__footer} card-footer`}>
            <CardButton label="Listen to tracks" link={`/pack/${id}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
