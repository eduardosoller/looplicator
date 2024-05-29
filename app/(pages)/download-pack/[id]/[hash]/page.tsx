import Image from "next/image";
import { secondary } from "@/components/Fonts";
import ProductList from "@/components/ProductList";
import LinkButton from "@/components/LinkButton";
import Purchase from "@/components/Svg/Purchase";
import Skeleton from "./Skeleton";
import styles from "./styles.module.css";
import { getDetails } from "@/services/product";

export default async function Download({
  params,
}: {
  params: { id: string; hash: string };
}) {
  const { price, thumbs, tracks, title } = await getDetails(params.id);

  return (
    <>
      <section className={styles.details}>
        <div className="container">
          {title ? (
            <div className="row justify-content-center align-center">
              <Purchase width={141} height={157} color="#084cf9" />
              <h2 className={`${secondary.className} ${styles["page-title"]}`}>
                THANK YOU FOR THE PURCHASE!
              </h2>
              <div className={styles["order-container"]}>
                <h4 className={styles["order-container-title"]}>
                  ORDER DETAILS
                </h4>
                <div className={styles["order-details"]}>
                  {thumbs && (
                    <Image
                      src={thumbs[280]}
                      alt={"cover"}
                      width={200}
                      height={200}
                      style={{ width: "30%", height: "auto" }}
                      priority
                    />
                  )}

                  <div className={styles["column-right"]}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={`${secondary.className} ${styles.subtitle}`}>
                      {`${tracks.length} tracks | ${
                        price === 0 ? "FREE" : "$" + price
                      }`}
                    </p>
                    <LinkButton
                      label="DOWNLOAD"
                      url={`https://looplipacker.s3.amazonaws.com/${params.hash}.zip`}
                      icon="download"
                    />
                  </div>
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
