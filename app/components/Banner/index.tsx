import Image from "next/image";
import { secondary } from "../Fonts";
import styles from "./styles.module.css";
export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className={`col-md-12 col-lg-6 ${styles.text}`}>
            <div className={styles.title}>
              <h3 className={`${secondary.className} ${styles.subtitle}`}>
                for the underground artists
              </h3>
              <h2 className={styles.float}>
                Break free from the ordinary and <span>explore</span> our
                collection of original industrial and dark ambient loops.
              </h2>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <Image
              src="/img/home.png"
              width="500"
              height="509"
              alt="home-banner"
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
