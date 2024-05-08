import { NextResponse } from "next/server"

export async function GET(request: Request): Promise<Response> {
  const response = await fetch('https://looplipacker.s3.amazonaws.com/looplishop-meta.json', { next: { revalidate: 86400000, tags: ['products'] } })
  if (!response.ok) {
    return NextResponse.json({ error: "Can't read json file" }, { status: 500 })
  }
  const data = await response.json()
  return NextResponse.json(data['month_pack'])
}