import { NextResponse } from "next/server"
import { createClient } from "utils/supabase/server"

export async function GET(request: Request,
  { params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('packs')
    .select(`*, tracks(id, title, url)`)
    .eq('release_id', params.id)
    .limit(1)
    .single()
  if (error) {
    console.log('error', error)
    throw new Error(error.message)
  }
  console.log('details endpoint data', data)
  return NextResponse.json(data)
}