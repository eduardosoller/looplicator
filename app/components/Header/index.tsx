import YoutubeSvg from "@/components/Svg/Youtube";
import SoundcloudSvg from "@/components/Svg/Soundcloud";
import InstagramSvg from "@/components/Svg/Instagram";
import LogoSvg from "@/components/Svg/Logo";
import styles from "./styles.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className={styles.logo}>
              <a href="/" title="LOOPLICATOR">
                <LogoSvg color="#084cf9" width={262} height={48} />
              </a>
            </h1>
          </div>
          <div className="col">
            <div className={styles.social}>
              <a
                href="https://soundcloud.com/looplicator"
                target="_blank"
                rel="noreferrer noopener"
                title="Soundcloud"
              >
                <SoundcloudSvg color="#084cf9" width={40} height={40} />
              </a>
              <a
                href="https://instagram.com/looplicator"
                target="_blank"
                rel="noreferrer noopener"
                title="Instagram"
              >
                <InstagramSvg color="#084cf9" width={32} height={32} />
              </a>
              <a
                href="https://youtube.com/@looplicator"
                target="_blank"
                rel="noreferrer noopener"
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
