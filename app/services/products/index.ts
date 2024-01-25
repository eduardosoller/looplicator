
const api_url = process.env.NEXT_PUBLIC_API_URL
const dynamic = 'force-dynamic'
type Playlist = {
  title: string;
  url: string;
};
export type Product = {
  id: string;
  title: string;
  cover_url: string;
  thumbs: { 280: string, 400: string }
  price: number;
  payment_url: string | null
  download_url: string | null;
  tracks: Playlist[]
};
const getProducts = async () => {
  const response = await fetch(`${api_url}/products`, { cache: 'no-store' })
  const products = await response.json();
  return products
}
const getProductDetails = async (id: string): Promise<Product> => {
  const response = await fetch(`${api_url}/products/details/${id}`)
  const details = await response.json();
  return details
}
export { getProducts, getProductDetails }