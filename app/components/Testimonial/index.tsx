import Image from "next/image";
import { secondary } from "../Fonts";
import styles from "./styles.module.css";
import QuotesSvg from "../Svg/Quotes";
import { getRandomTestimonial } from "@/services/testimonial";
export default async function Testimonial() {
  const { avatar_url, name, comment } = await getRandomTestimonial();
  return (
    <div className={`col-xl-6 col-lg-12 col-md-12 col-xm-12 ${styles.text}`}>
      <div className={`${styles.card__wrapper}`}>
        <div className={`${styles.card}`}>
          <div className="row">
            <div className={`${styles["col-center"]}`}>
              <div className={`${styles.title}`}>{comment}</div>
              <div className={styles.footer}>
                {avatar_url && (
                  <Image
                    src={avatar_url}
                    width="60"
                    height="60"
                    alt="testimonial avatar"
                    className={styles.image}
                  />
                )}
                {name}
              </div>
            </div>
            <div className={`${styles["col-right"]}`}>
              <div className={styles["col-right-icon"]}>
                <QuotesSvg width={20} color="#202020" />
              </div>
              <div
                className={`${secondary.className} ${styles["col-right-title"]}`}
              >
                TESTIMONIALS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
