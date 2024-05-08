import Image from "next/image";
import { secondary } from "../Fonts";
import styles from "./styles.module.css";
import Link from "next/link";
import Section from "../Section";
export default function Banner() {
  return (
    <Section cssClass={styles.banner}>
      <div className={`col-md-12 col-lg-6 ${styles.text}`}>
        <div className={styles.title}>
          <h3 className={`${secondary.className} ${styles.subtitle}`}>
            FOR THE UNDERGROUND ARTISTS
          </h3>
          <h2 className={styles.float}>
            Break free from the ordinary and
            <Link href="/loops">
              {" "}
              <span>explore</span>{" "}
            </Link>
            our collection of original industrial and dark ambient loops.
          </h2>
        </div>
      </div>
      <div className={`${styles["image-wrapper"]} col-md-12 col-lg-6`}>
        <Image
          src="/img/home.png"
          width="500"
          height="509"
          alt="home-banner"
          className={styles.image}
          priority
        />
      </div>
    </Section>
  );
}
