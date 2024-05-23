import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

const api_url = process.env.NEXT_PUBLIC_API_URL;


export const getProducts = async (limit: number, page: number, order: string | undefined): Promise<ProductsResponse> => {
  const response = await fetch(
    `${api_url}/products/${limit}/${page}/${order}`,
    //TODO: testar o cache
    { cache: "no-cache" }
  );
  if (!response.ok) {
    notFound();
  }
  return await response.json();
}

export const getDetails = async (id: string): Promise<Product> => {
  const response = await fetch(`${api_url}/products/details/${id}`, { cache: 'no-store' });
  if (!response.ok) {
    notFound();
  }
  return await response.json();
}

export const getFeaturedPack = async (): Promise<Product> => {
  const response = await fetch(`${api_url}/products/featured-pack`, { cache: 'no-store' });
  if (!response.ok) {
    throw NextResponse.json({ error: "Can´t load featured pack" }, { status: 404 })
  }
  return await response.json();
}
