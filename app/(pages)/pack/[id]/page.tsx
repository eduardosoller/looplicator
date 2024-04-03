"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { secondary } from "@/components/Fonts";
import LinkButton from "@/components/LinkButton";
import AudioPlayer from "@/components/AudioPlayer";
import ProductList from "@/components/ProductList";
import { useGetDetails } from "@/hooks/useGetDetails";
import Skeleton from "./Skeleton";
import styles from "./styles.module.css";
import { GetServerSideProps } from "next";
export default function Details({ params }: { params: { id: string } }) {
  const { data, error } = useGetDetails(params.id);

  useEffect(() => {
    // console.log("DETAILS DATA", data);
  }, [data]);
  const buttonLink = data?.download_url ? data.download_url : data?.payment_url;
  const buttonLabel = data?.download_url ? "DOWNLOAD" : "PAY $" + data?.price;
  const buttonIcon = data?.download_url ? "download" : "pay";

  return (
    <>
      <section className={styles.details}>
        <div className="container">
          {data ? (
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className={styles["column-left"]}>
                  <div className={styles.cover}>
                    <Image
                      src={data.thumbs[650]}
                      alt={"cover"}
                      width={400}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className={styles["column-right"]}>
                  <h3 className={styles.title}>{data.title}</h3>
                  <p className={`${secondary.className} ${styles.subtitle}`}>
                    {`${data.tracks.length} tracks | ${
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
                  <AudioPlayer playlist={data.tracks} />
                </div>
              </div>
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
      </section>
      <ProductList limit={4} order="random" title="HEY, CHECK THIS OUT" />
    </>
  );
}
