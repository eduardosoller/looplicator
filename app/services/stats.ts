import { NextResponse } from "next/server";

const api_url = process.env.NEXT_PUBLIC_API_URL;

export const getStats = async (): Promise<PageStats> => {
  const response = await fetch(`${api_url}/stats/`, { cache: 'no-store' });
  if (!response.ok) {
    throw NextResponse.json({ error: "Can´t load stats" }, { status: 404 })
  }
  return await response.json();
}
