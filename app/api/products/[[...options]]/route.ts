export async function GET(request: Request,
  { params }: { params: { options: number[] } }): Promise<Response> {
  try {
    console.time('fetch json')
    const response = await fetch('https://looplipacker.s3.amazonaws.com/looplishop.json')
    if (!response.ok) {
      return Response.error()
    }
    const data = await response.json()
    console.timeEnd()
    return Response.json(onDataResponse(data))
  } catch (error) {
    console.error('catch error', error)
    return Response.error()
  }

  function onDataResponse(file: any) {
    const data = file
    const items: object[] = [];
    for (let key in data) {
      data[key].id = key
      items.push(data[key]);
    }

    if (params.options) {
      console.log('if params', params.options)
      const [limit, page] = params.options.map(n => Number(n))
      const pageCount = Math.ceil(items.length / limit);
      const start = (page - 1) * limit ?? 0;
      const end = start + limit
      if (page > items.length - 1) {
        return [];
      }
      return { items: items.slice(start, end), pageCount: pageCount, page: page }
    }
    return items
  }
}