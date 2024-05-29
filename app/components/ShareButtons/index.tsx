"use client";
import Link from "next/link";
import WhatsappSvg from "../Svg/Whatsapp";
import FacebookSvg from "../Svg/Facebook";
import TwitterSvg from "../Svg/Twitter";
import styles from "./styles.module.css";
import { ReactNode } from "react";
export default function ShareButtons({
  text = "Hey, listen those dope loops by Looplicator: ",
}: {
  text?: string;
}) {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const social: { type: string; url: string; icon: ReactNode }[] = [
    {
      type: "whatsapp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        text
      )}%20${encodeURIComponent(currentUrl)}`,
      icon: <WhatsappSvg width={30} height={30} color="#084CF9" />,
    },
    {
      type: "facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      icon: <FacebookSvg width={30} height={30} color="#084CF9" />,
    },
    {
      type: "twitter",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(currentUrl)}`,
      icon: <TwitterSvg width={30} height={30} color="#084CF9" />,
    },
  ];

  return (
    <div className={styles.share}>
      <h4 className={styles.title}>SHARE</h4>
      {social.map((item) => (
        <Link key={item.type} href={item.url}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
