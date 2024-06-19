"use client";
import styles from "./styles.module.css";
export default function SocialButton({
  url,
  title,
  icon,
}: {
  url: string;
  title: string;
  icon: any;
}) {
  return (
    <a
      className={styles.link}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      title={title}
    >
      {icon}
    </a>
  );
}
