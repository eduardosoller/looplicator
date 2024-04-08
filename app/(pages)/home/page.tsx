import ProductList from "@/components/ProductList";
import Banner from "@/components/Banner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Looplicator - Home",
};
export default function Home() {
  return (
    <>
      <Banner />
      <ProductList limit={4} title="PACKS OF THE MONTH" />
    </>
  );
}
