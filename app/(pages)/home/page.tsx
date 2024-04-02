"use client";
import ProductList from "@/components/ProductList";
import Banner from "@/components/Banner";
export default function Home() {
  return (
    <>
      <Banner />
      <ProductList limit={4} title="LOOPS OF THE MONTH" />
    </>
  );
}
