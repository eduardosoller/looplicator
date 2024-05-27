import Image from "next/image";
import { secondary } from "../Fonts";
import styles from "./styles.module.css";
import LinkButton from "../LinkButton";
import FireSvg from "../Svg/Fire";
import { getDetails, getFeaturedPack } from "@/services/product";
export default async function FeaturedProduct() {
  const { thumbs, title, tracks, price, release_id } = await getFeaturedPack();
  const type = price === 0 ? "Free" : "Premium";
  return (
    <div className={`col-xl-6 col-lg-12 col-md-12 col-xm-12 ${styles.text}`}>
      <div className={`${styles.card__wrapper}`}>
        <div className={`${styles.card}`}>
          <div className="row">
            <div className={`${styles["image-wrapper"]}`}>
              <Image
                src={thumbs[400]}
                width="300"
                height="300"
                alt="home-banner"
                className={styles.image}
                priority
              />
            </div>
            <div className={`${styles["col-center"]}`}>
              <h3 className={styles.title}>{title}</h3>
              <div className={`${secondary.className} ${styles.text}`}>
                The most commented and liked pack by YouTube fans in April 2024.
                <div className={styles.info}>
                  {tracks.length} loops | {type} Pack
                </div>
              </div>
              <div className={styles.footer}>
                <LinkButton label="CHECK IT OUT" url={`/pack/${release_id}`} />
              </div>
            </div>
            <div className={`${styles["col-right"]}`}>
              <div className={styles["col-right-icon"]}>
                <FireSvg width={20} color="#202020" />
              </div>
              <div
                className={`${secondary.className} ${styles["col-right-title"]}`}
              >
                PACK OF THE MONTH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
