import Image from "next/image";
import YoutubeSvg from "@/components/Svg/Youtube";
import SoundcloudSvg from "@/components/Svg/Soundcloud";
import InstagramSvg from "@/components/Svg/Instagram";
import styles from "./styles.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className={styles.logo}>
              <a href="/" title="LOOPLICATOR">
                <Image
                  src="/img/logo.svg"
                  width="300"
                  height="200"
                  alt="Looplicator Brand"
                  priority
                />
              </a>
            </h1>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <div className={styles.social}>
              <a
                href="https://soundcloud.com/looplicator"
                target="_blank"
                title="Soundcloud"
              >
                <SoundcloudSvg color="#084cf9" width={40} height={40} />
              </a>
              <a
                href="https://instagram.com/looplicator"
                target="_blank"
                title="Instagram"
              >
                <InstagramSvg color="#084cf9" width={32} height={32} />
              </a>
              <a
                href="https://youtube.com/@looplicator"
                target="_blank"
                title="Youtube"
              >
                <YoutubeSvg color="#084cf9" width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
