import AvatarSvg from "../Svg/Avatar";
import { secondary } from "../Fonts";
import styles from "./styles.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.left}`}>
            <AvatarSvg
              width={80}
              height={80}
              color="#011861"
              secondary="#558bff"
            />
          </div>
          <div className={`col ${styles.right}`}>
            © 2024 - LOOPLICATOR - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
