import { NextResponse } from "next/server";

const api_url = process.env.NEXT_PUBLIC_API_URL;

export const getRandomTestimonial = async (): Promise<Testimonial> => {
  const response = await fetch(`${api_url}/random_testimonial`, { cache: 'no-store' });
  if (!response.ok) {
    throw NextResponse.json({ error: "Can´t load testimonial" }, { status: 404 })
  }
  return await response.json();
}
