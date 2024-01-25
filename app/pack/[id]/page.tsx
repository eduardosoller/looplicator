"use client";
import { useEffect, useState } from "react";
import { getProductDetails, type Product } from "services/products";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { secondary } from "@/components/Fonts";
import AudioPlayer from "@/components/AudioPlayer";
import styles from "./styles.module.css";
import ProductList from "@/components/ProductList";

export default function Details({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Product | null>(null);
  const [totalTracks, setTotalTracks] = useState<number | null>();

  useEffect(() => {
    setData(null);
    const fetch = async () => {
      const response: Product = await getProductDetails(params.id);
      setData(response);
      setTotalTracks(response.tracks.length);
    };
    fetch();
  }, [params.id]);
  if (!data) return;
  const buttonLink = data.download_url ? data.download_url : data.payment_url;
  const buttonLabel = data.download_url ? "DOWNLOAD" : "PAY $" + data.price;
  const buttonIcon = data.download_url ? "download" : "pay";
  return (
    <>
      <section className={styles.details}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 py-5">
              <div className={styles.cover}>
                <Image
                  src={data.thumbs[400]}
                  alt={"cover"}
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 py-5">
              <h3 className={styles.title}>{data.title}</h3>
              <p className={`${secondary.className} ${styles.subtitle}`}>
                {`${totalTracks} tracks | ${
                  data.price === 0 ? "FREE" : "$" + data.price
                }`}
              </p>

              {buttonLink && (
                <LinkButton
                  label={buttonLabel}
                  url={buttonLink}
                  icon={buttonIcon}
                />
              )}

              {data && <AudioPlayer playlist={data.tracks} />}
            </div>
          </div>
        </div>
      </section>
      <ProductList limit={4} />
    </>
  );
}
