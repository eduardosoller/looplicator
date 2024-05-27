import { NextResponse } from "next/server"
import { createClient } from 'utils/supabase/server'

export async function GET(): Promise<Response> {

  const file = await fetch('https://looplipacker.s3.amazonaws.com/looplishop.json', { cache: 'no-cache' })
  if (!file.ok) {
    return NextResponse.json({ error: "Can't read json file" }, { status: 500 })
  }
  const json: { [index: string]: any } = await file.json()
  const packs: any = []
  const tracks: any = []

  const supabase = createClient()
  async function getLastPack() {
    const { data, error } = await supabase
      .from('packs')
      .select('release_id')
      .order('release_id', { ascending: false })
      .limit(1)
    if (error) {
      console.log('error', error)
      throw new Error(error.message)
    }
    console.log(data[0]?.release_id)
    return data[0]?.release_id
  }
  const release_id = await getLastPack()
  function isNewer(current: string, recent?: any) {
    return recent ? new Date(current) > new Date(recent) : true
  }
  Object.entries(json).forEach(([key, value]) => {
    if (isNewer(key, release_id)) {
      packs.push({
        release_id: key,
        title: value.title,
        download_url: value.download_url,
        payment_url: value.payment_url,
        price: value.price,
        thumbs: value.thumbs
      })
    }
  })
  async function insertPacks(array: []) {
    const { data, error } = await supabase.from('packs')
      .insert(array)
      .select()
    if (error) {
      console.log('error packs', error.message)
      throw new Error(error.message + ' ==> ' + error.details)
    }
    return data
  }
  let response
  try {
    response = await insertPacks(packs)
    response.forEach((pack: any) => {
      json[pack.release_id].tracks.forEach((track: any) => {
        tracks.push({ pack_id: pack.id, title: track.title, url: track.url })
      })
    })
  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json(error.message)
  }

  const { error, data } = await supabase.from('tracks')
    .insert(tracks)
    .select()
  if (error) {
    //TODO: se der erro aqui, deletar pack
    return NextResponse.json(error.message + ' - ' + error.details)
  }
  return NextResponse.json(`Foram inseridos ${response.length} pack(s) e ${data.length} tracks.`)
}