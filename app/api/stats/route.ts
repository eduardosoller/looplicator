import { NextResponse } from "next/server"
import { createClient } from 'utils/supabase/server'
export async function GET(): Promise<Response> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('stats')
    .select('*')
    .eq("id", 1)
    .single()
  return NextResponse.json(data)
}