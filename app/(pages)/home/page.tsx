import ProductList from "@/components/ProductList";
import Banner from "@/components/Banner";
import Section from "@/components/Section";
import FeaturedProduct from "@/components/FeaturedProduct";
import Testimonial from "@/components/Testimonial";
import Stats from "@/components/Stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Looplicator - Home",
};
export default function Home() {
  return (
    <>
      <Banner />
      <Section>
        <FeaturedProduct />
        <Testimonial />
      </Section>
      <ProductList limit={4} title="LATEST RELEASES" order="desc" />
      <Stats />
    </>
  );
}
