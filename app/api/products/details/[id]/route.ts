export async function GET(request: Request,
  { params }: { params: { id: string } }) {
  const response = await fetch('https://looplipacker.s3.amazonaws.com/looplishop.json', { next: { revalidate: 86400, tags: ['details'] } })
  if (!response.ok) {
    return Response.error()
  }
  const data = await response.json()
  const details = data[params.id]
  details.id = params.id
  return Response.json(details)
}