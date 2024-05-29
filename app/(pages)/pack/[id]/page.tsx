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
//import { ShareButtons } from "@/components/ShareButton";
import dynamic from "next/dynamic";

const ShareButtons = dynamic(() => import("../../../components/ShareButtons"), {
  ssr: false,
});

type Props = {
  params: { id: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const { price, title } = await getDetails(params.id);
  const type = price === 0 ? "FREE" : "PREMIUM";
  return {
    title: `Loop pack | ${title} | ${type} Loops | Looplicator`,
  };
};

export default async function Details({ params }: { params: { id: string } }) {
  const { download_url, title, tracks, payment_url, price, thumbs } =
    await getDetails(params.id);
  const buttonLink = download_url ? download_url : payment_url;
  const buttonLabel = download_url
    ? "DOWNLOAD"
    : "PAY " + formatCurrency(price);
  const buttonIcon = download_url ? "download" : "pay";

  return (
    <>
      <section className={styles.details}>
        <div className="container">
          {thumbs ? (
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className={styles["column-left"]}>
                  <div className={styles.cover}>
                    <Image
                      src={thumbs[650]}
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
                  <h3 className={styles.title}>{title}</h3>
                  <div className={`${secondary.className} ${styles.subtitle}`}>
                    {`${tracks.length} loops | ${
                      price === 0 ? "FREE PACK" : "PREMIUM PACK"
                    }`}
                  </div>
                  {buttonLink && (
                    <LinkButton
                      label={buttonLabel}
                      url={buttonLink}
                      icon={buttonIcon}
                    />
                  )}

                  <ShareButtons />

                  <AudioPlayer playlist={tracks} />
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
