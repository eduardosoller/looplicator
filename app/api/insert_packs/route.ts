import { NextResponse } from "next/server"
import { createClient } from 'utils/supabase/server'

// const json: { [index: string]: any } = {
//   "2024-01-01": {
//     "title": "Pluginoiser.inherit",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MjcxMjU4NTc3MwMTY5OTM2NTY2NA.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-01.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-01_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-01_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-01_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L001 61BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NTA4NjQyMzE0.mp3"
//       },
//       {
//         "title": "L002 166BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MjI3MDY5Njg4MA.mp3"
//       },
//       {
//         "title": "L003 144BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDAzMjc2NzI3MA.mp3"
//       },
//     ]
//   },
//   "2024-01-02": {
//     "title": "Snaresatanica",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MTk2MjMyMDE3NQNTcyNjE3NDQw.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-02.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-02_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-02_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-02_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L056 60BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MjM0MzIxNzMxNg.mp3"
//       },
//       {
//         "title": "L057 133BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDIzOTIzNTEyMg.mp3"
//       },
//       {
//         "title": "L058 138BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MTgxMzE1MzE4Nw.mp3"
//       }
//     ]
//   },
//   "2024-01-03": {
//     "title": "Snaresistor",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MTY2MTEzODYwOAMjg4OTM4OTc2Mg.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-03.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-03_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-03_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-03_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L063 71BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MTc1MDE2NTY0NQ.mp3"
//       },
//       {
//         "title": "L064 169BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDEzMDczMzM1OA.mp3"
//       },
//       {
//         "title": "L065 69BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MjE2NzU5MDMyOA.mp3"
//       }
//     ]
//   },
//   "2024-01-06": {
//     "title": "Snaresatanica 2",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MTk2MjMyMDE3NQNTcyNjE3NDQw2222.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-02.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-02_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-02_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-02_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L056 60BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MjM0MzIxNzMxNg222.mp3"
//       },
//       {
//         "title": "L057 133BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDIzOTIzNTEyMg2222.mp3"
//       },
//       {
//         "title": "L058 138BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MTgxMzE1MzE4Nw222.mp3"
//       }
//     ]
//   },
//   "2024-01-04": {
//     "title": "Rustic Requiem",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MTk3Mzg5NzMxOTU3MTc5MjE2.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-04.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-04_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-04_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-04_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L029 106BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MTg5OTk4NTk2Ng.mp3"
//       },
//       {
//         "title": "L030 69BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MzAxNTI4NTIz.mp3"
//       },
//       {
//         "title": "L031 35BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MTcyODAzODIzNw.mp3"
//       },
//     ]
//   },
//   "2024-01-05": {
//     "title": "Électrochaotic ",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MTA4NTA0Mzg1MAMjAwOTcxMDIxNw.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-05.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-05_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-05_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-05_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L001 211BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDI1MjU4MTk4.mp3"
//       },
//       {
//         "title": "L002 100.0BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MjE1Mjg0MDU1Ng.mp3"
//       },
//       {
//         "title": "L003 185BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDE0OTY0NDc5NA.mp3"
//       },
//     ]
//   },
//   "2024-02-05": {
//     "title": "Électrochaotic ",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MTA4NTA0Mzg1MAMjAwOTcxMDIxNw123.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-05.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-05_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-05_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-05_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L001 211BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDI1MjU4MTk4123.mp3"
//       },
//       {
//         "title": "L002 100.0BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MjE1Mjg0MDU1Ng123.mp3"
//       },
//       {
//         "title": "L003 185BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDE0OTY0NDc5NA123.mp3"
//       },
//     ]
//   },
//   "2024-02-06": {
//     "title": "Électrochaotic 666",
//     "price": 0,
//     "payment_url": null,
//     "download_url": "https://looplipacker.s3.amazonaws.com/MTA4NTA0Mzg1MAMjAwOTcxMDIxNw123666.zip",
//     "cover_url": "https://looplipacker.s3.amazonaws.com/2024-01-05.jpg",
//     "thumbs": {
//       "650": "https://looplipacker.s3.amazonaws.com/2024-01-05_650.jpg",
//       "400": "https://looplipacker.s3.amazonaws.com/2024-01-05_400.jpg",
//       "280": "https://looplipacker.s3.amazonaws.com/2024-01-05_280.jpg"
//     },
//     "tracks": [
//       {
//         "title": "L001 211BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDI1MjU4MTk4123666.mp3"
//       },
//       {
//         "title": "L002 100.0BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/MjE1Mjg0MDU1Ng123666.mp3"
//       },
//       {
//         "title": "L003 185BPM",
//         "url": "https://looplipacker.s3.amazonaws.com/NDE0OTY0NDc5NA123666.mp3"
//       },
//     ]
//   }
// }

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