import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
  revalidateTag('products')
  revalidateTag('details')
  return Response.json('Cache purged')
}