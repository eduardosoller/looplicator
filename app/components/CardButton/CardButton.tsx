import Link from "next/link";
import ListenSvg from "@/components/Svg/Listen";
import styles from "./styles.module.css";
export default function CardButton({ label, link }: ButtonProps) {
  return (
    <Link href={link}>
      <button className={styles.card__button}>
        <ListenSvg width={35} height={30} color="#202422" />
        {label}
      </button>
    </Link>
  );
}
