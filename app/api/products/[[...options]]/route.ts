import { notFound } from "next/navigation";
import { NextResponse } from "next/server"
import { createClient } from 'utils/supabase/server'
export async function GET(request: Request, { params }: { params: { options: string[] } }): Promise<Response> {
  const [limit, page] = params.options.map(n => Number(n))
  const hasPrevPage = page <= 1 ? false : true

  const start = (page - 1) * limit ?? 0;
  const end = (start + limit - 1)

  const supabase = createClient()
  const { data, count, error } = await supabase
    .from('packs')
    .select('*', { count: "exact" })
    .order('release_id', { ascending: false })
    .range(start, end)

  if (error) {
    console.log('error', error)
    throw new Error(error.message)
  }
  const pageCount = Math.ceil(count! / limit);
  const hasNextPage = page >= pageCount ? false : true
  if (page > pageCount || page < 1) {
    notFound()
  }
  return NextResponse.json({ items: data, pageCount, page, hasNextPage, hasPrevPage })
}