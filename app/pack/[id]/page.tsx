"use client";
import { useEffect, useState } from "react";
import { getProductDetails, type Product } from "services/products";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { secondary } from "@/components/Fonts";
import AudioPlayer from "@/components/AudioPlayer";
import "./styles.css";
import ProductList from "@/components/ProductList";
const tracks = [
  { title: "L001 129BPM", url: "/tracks/NjcyNDAyOTc2.mp3" },
  { title: "L002 188BPM", url: "/tracks/MTcyMzcyNjY2Nw.mp3" },
];
type Playlist = {
  title: string;
  url: string;
};
const emptyProduct = {
  id: "",
  title: "",
  cover_url: "http://www.placeholder.com.br",
  price: "",
  tracks: [{ title: "", url: "" }],
};
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
  return (
    <section className="details">
      <div className="container">
        <div className="row">
          <div className="col">
            <Image
              src={data.cover_url}
              alt={"cover"}
              width={400}
              height={400}
              unoptimized
              priority
            />
          </div>
          <div className="col">
            <h3>{data.title}</h3>
            <p className={secondary.className}>
              {totalTracks && `${totalTracks} tracks`}
            </p>
            {/* <p className="price">$ {data.price}</p> */}
            <LinkButton />
            {data && <AudioPlayer playlist={data.tracks} />}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ProductList limit={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
