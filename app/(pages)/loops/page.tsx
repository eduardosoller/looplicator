import ProductList from "@/components/ProductList";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Looplicator - Loops Packs",
};
export default function Loops({ searchParams }: any) {
  return (
    <>
      <ProductList
        title="EXPLORE OUR PACKS"
        order="desc"
        searchParams={searchParams}
        viewAllButton={false}
        pagination
      />
    </>
  );
}
