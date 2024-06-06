import { createClient } from 'utils/supabase/server'
import { NextResponse } from "next/server"

export async function GET(request: Request): Promise<Response> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('packs')
    .select(`*, tracks(title)`)
    .eq('featured', true)
    .order('release_id', { ascending: false })
    .limit(1)
    .single()
  if (error) {
    console.log('error', error)
    throw new Error(error.message)
  }
  return NextResponse.json(data)
}