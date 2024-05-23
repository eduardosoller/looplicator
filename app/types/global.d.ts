export { };

declare global {
  var database = null
  type Playlist = {
    title: string;
    url: string;
  };
  type Product = {
    id: string;
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
    testimonial: string;
    avatar: string;
    date: string
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