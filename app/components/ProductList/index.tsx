"use client";
import Image from "next/image";
import Link from "next/link";
import { secondary } from "../Fonts";
import { getProducts } from "services/products";
import ListenSvg from "../Svg/Listen";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
type ButtonProps = {
  label: string;
  link: string;
};
type ProductProps = {
  id: string;
  title: string;
  cover_url: string;
  price: string;
};

export default function ProductList({ limit }: { limit?: number }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(limit ? response.slice(0, limit) : response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function CardButton({ label, link }: ButtonProps) {
    return (
      <Link href={link}>
        <button className={styles.cardbutton}>
          <ListenSvg width={35} height={30} color="#084cf9" />
          {label}
        </button>
      </Link>
    );
  }
  function ProductCard({ id, title, cover_url, price }: ProductProps) {
    return (
      <div className="col-12 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className={`${styles.productcard} card`}>
          {price == "0" && (
            <div className={`${styles.free} col`}>FREE · FREE · FREE</div>
          )}
          <div className="card-image-top">
            <Image
              src={cover_url}
              style={{ width: "100%", height: "100%" }}
              alt="cover"
              width={235}
              height={235}
              unoptimized
            />
          </div>
          <div className="card-body">
            <h4 className={styles.title}>{title}</h4>
            <p className={`${secondary.className} ${styles.price}`}>
              $ {price}
            </p>
            <CardButton label="Listen to tracks" link={`/pack/${id}`} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="">
      <div className="container">
        <div className={`${styles.productlist} row g-4 card-group`}>
          {products.map((item: ProductProps, index: number) => (
            <ProductCard
              id={item.id}
              key={index}
              title={item.title}
              cover_url={item.cover_url}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
