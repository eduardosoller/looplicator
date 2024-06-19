import YoutubeSvg from "@/components/Svg/Youtube";
import SoundcloudSvg from "@/components/Svg/Soundcloud";
import InstagramSvg from "@/components/Svg/Instagram";
import LogoSvg from "@/components/Svg/Logo";
import styles from "./styles.module.css";
import SocialButton from "../SocialButton";
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
              <SocialButton
                title="Soundcloud"
                url="https://soundcloud.com/looplicator"
                icon={<SoundcloudSvg color="#084cf9" width={30} height={30} />}
              />

              <SocialButton
                title="Instagram"
                url="https://instagram.com/looplicator"
                icon={<InstagramSvg color="#084cf9" width={24} height={24} />}
              />

              <SocialButton
                title="Youtube"
                url="https://youtube.com/@looplicator"
                icon={<YoutubeSvg color="#084cf9" width={32} height={28} />}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
