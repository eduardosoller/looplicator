import { NextResponse } from "next/server";
import { createClient } from 'utils/supabase/server';

interface BestPack {
  [key: string]: string;
}

interface Testimonial {
  name: string;
  date: string;
  comment: string;
  avatar_url: string;
}

interface Stats {
  loops: number;
  packs: number;
  seconds: number;
  gigabytes: number;
}

interface MetaData {
  month_pack: string;
  best_packs: BestPack;
  testimonials: Testimonial[];
  stats: Stats;
}

async function fetchMetaData(): Promise<MetaData> {
  const url = 'https://looplipacker.s3.amazonaws.com/looplishop-meta.json';

  const response = await fetch(url, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error("Can't read JSON file");
  }

  return response.json();
}

export async function GET(): Promise<Response> {
  const supabase = createClient();

  let metaData: MetaData;

  try {
    metaData = await fetchMetaData();
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return NextResponse.json({ error: "Error fetching metadata" }, { status: 500 });
  }

  // Marcar o pack do mês como "featured"
  const monthPackUpdate = await supabase
    .from('packs')
    .update({ featured: true })
    .eq('release_id', metaData.month_pack);

  if (monthPackUpdate.error) {
    console.error('Error updating month_pack:', monthPackUpdate.error.message);
    return NextResponse.json({ error: monthPackUpdate.error.message }, { status: 500 });
  }

  // // Inserir ou atualizar best_packs
  // const bestPacksArray = Object.entries(metaData.best_packs).map(([month, date]) => ({ month, date }));
  // const bestPacksUpdate = await supabase
  //   .from('best_packs')
  //   .upsert(bestPacksArray, { onConflict: ['month'] });

  // if (bestPacksUpdate.error) {
  //   console.error('Error updating best_packs:', bestPacksUpdate.error.message);
  //   return NextResponse.json({ error: bestPacksUpdate.error.message }, { status: 500 });
  // }

  // Inserir ou atualizar testimonials
  const testimonialsUpdate = await supabase
    .from('testimonials')
    .upsert(metaData.testimonials);

  if (testimonialsUpdate.error) {
    console.error('Error updating testimonials:', testimonialsUpdate.error.message);
    return NextResponse.json({ error: testimonialsUpdate.error.message }, { status: 500 });
  }

  // Inserir ou atualizar stats
  const statsUpdate = await supabase
    .from('stats')
    .update([metaData.stats]);

  if (statsUpdate.error) {
    console.error('Error updating stats:', statsUpdate.error.message);
    return NextResponse.json({ error: statsUpdate.error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Metadata updated successfully' });
}
