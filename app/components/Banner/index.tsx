import Image from "next/image";
import { secondary } from "@/components/Fonts";
import styles from "./styles.module.css";
export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className={`col-md-12 col-lg-6 ${styles.text}`}>
            <h2 className={styles.title}>
              <span className={`${secondary.className} ${styles.subtitle}`}>
                for the underground artists
              </span>
              <div className={styles.float}>
                Break free from the ordinary and <span>explore</span> our
                collection of original industrial and dark ambient loops.
              </div>
            </h2>
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
