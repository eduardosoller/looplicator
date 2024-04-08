import { notFound } from "next/navigation";
import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { options: string[] } }): Promise<Response> {
  const response = await fetch('https://looplipacker.s3.amazonaws.com/looplishop.json', { next: { revalidate: 86400, tags: ['products'] } })
  if (!response.ok) {
    return NextResponse.json({ error: "Can't read json file" }, { status: 500 })
  }
  const data = await response.json()
  const items: Product[] = [];
  for (let key in data) {
    data[key].id = key
    items.push(data[key]);
  }

  let products: Product[]
  switch (params.options[2]) {
    case 'desc':
      products = items.sort((a, b) => {
        const da: number = new Date(a.id).getTime()
        const db: number = new Date(b.id).getTime()
        return db - da;
      })
      break
    case 'random':
      products = items
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
      break
    default:
      products = items
  }
  const [limit, page] = params.options.map(n => Number(n))
  const pageCount = Math.ceil(products.length / limit);
  const hasNextPage = page >= pageCount ? false : true
  const hasPrevPage = page <= 1 ? false : true
  const start = (page - 1) * limit ?? 0;
  const end = start + limit
  if (page > pageCount || page < 1) {
    notFound()
    // return NextResponse.json({ error: "Página não existe" }, { status: 404 })
  }
  return NextResponse.json({ items: products.slice(start, end), pageCount, page, hasNextPage, hasPrevPage })
}