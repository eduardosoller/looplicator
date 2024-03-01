export async function GET(request: Request,
  { params }: { params: { options: string[] } }): Promise<Response> {
  try {
    const response = await fetch('https://looplipacker.s3.amazonaws.com/looplishop.json', { next: { revalidate: 86400, tags: ['products'] } })
    if (!response.ok) {
      return Response.error()
    }
    const data = await response.json()
    return Response.json(onDataResponse(data))
  } catch (error) {
    console.error('catch error', error)
    return Response.error()
  }
  function onDataResponse(file: any) {
    const data = file
    const items: Product[] = [];
    for (let key in data) {
      data[key].id = key
      items.push(data[key]);
    }

    if (params.options) {
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
      const start = (page - 1) * limit ?? 0;
      const end = start + limit
      if (page > products.length - 1) {
        return [];
      }
      return { items: products.slice(start, end), pageCount: pageCount, page: page }
    }
    return { items }
  }
}