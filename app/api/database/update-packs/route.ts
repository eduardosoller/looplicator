import { NextResponse } from "next/server";
import { createClient } from 'utils/supabase/server';

interface UpdatePayload {
  release_id: string;
  title: string;
  download_url: string;
  payment_url: string;
  price: number;
  thumbs: string;
}

export async function POST(request: Request): Promise<Response> {
  const supabase = createClient();
  const payload: { [key: string]: Omit<UpdatePayload, 'release_id'> } = await request.json();

  if (!payload || typeof payload !== 'object') {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Converte o payload em um array de UpdatePayload
  const updates: UpdatePayload[] = Object.entries(payload).map(([release_id, data]) => ({
    release_id,
    ...data
  }));

  const updatePromises = updates.map(async (update) => {
    const { data, error } = await supabase
      .from('packs')
      .update({
        title: update.title,
        download_url: update.download_url,
        payment_url: update.payment_url,
        price: update.price,
        thumbs: update.thumbs,
      })
      .eq('release_id', update.release_id)
      .select();

    if (error) {
      console.error(`Error updating release_id ${update.release_id}:`, error.message);
      throw new Error(error.message);
    }
    return data;
  });

  try {
    const results = await Promise.all(updatePromises);
    const updatedCount = results.filter(result => result.length > 0).length;
    return NextResponse.json({ message: `${updatedCount} release(s) updated successfully` });
  } catch (error: any) {
    console.error('Error during updates:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
