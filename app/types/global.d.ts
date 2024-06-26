export { };

declare global {
  var database = null
  type Playlist = {
    title: string;
    url: string;
  };
  type Product = {
    release_id: string;
    title: string;
    cover_url: string;
    thumbs: { 280: string, 400: string, 650: string }
    price: number;
    payment_url: string | null
    download_url: string | null;
    tracks: Playlist[]
  };
  type Testimonial = {
    name: string;
    comment: string;
    avatar_url: string;
    date: string
  }
  type PageStats = {
    id: number
    loops: number,
    seconds: number,
    packs: number,
    gigabytes: number
  }
  type ProductsResponse = {
    items: Product[];
    page: number;
    pageCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  }
  type getProductsProps = {
    limit: number;
  }
  type ButtonProps = {
    label: string;
    link: string;
  };
  type ProductCardProps = {
    id: string;
    title: string;
    cover_url: string;
    price: number;
  };
}