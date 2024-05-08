import Link from "next/link";
import ListenSvg from "@/components/Svg/Listen";
import styles from "./styles.module.css";
export default function CardButton({ label, link }: ButtonProps) {
  return (
    <Link href={link}>
      <div className={styles["button-wrapper"]}>
        <button className={styles.button}>
          <ListenSvg width={35} height={30} color="#084cf9" />
          {label}
        </button>
      </div>
    </Link>
  );
}
