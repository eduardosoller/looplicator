import Image from "next/image";
import { secondary } from "@/components/Fonts";
import LinkButton from "@/components/LinkButton";
import AudioPlayer from "@/components/AudioPlayer";
import ProductList from "@/components/ProductList";
import Skeleton from "./Skeleton";
import styles from "./styles.module.css";
import { getDetails } from "@/services/product";
import { Metadata } from "next";
import { formatCurrency } from "utils/helpers";

type Props = {
  params: { id: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const data = await getDetails(params.id);
  const type = data.price === 0 ? "FREE" : "PREMIUM";
  return {
    title: `Loop pack | ${data.title} | ${type} Loops | Looplicator`,
  };
};

export default async function Details({ params }: { params: { id: string } }) {
  const data = await getDetails(params.id);
  const buttonLink = data?.download_url ? data.download_url : data?.payment_url;
  const buttonLabel = data?.download_url
    ? "DOWNLOAD"
    : "PAY " + formatCurrency(data?.price);
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
                  <div className={`${secondary.className} ${styles.subtitle}`}>
                    {`${data.tracks.length} loops | ${
                      data.price === 0 ? "FREE PACK" : "PREMIUM PACK"
                    }`}
                  </div>
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
