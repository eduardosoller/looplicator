import { NextResponse } from 'next/server';

export async function GET(): Promise<Response> {
  const url = 'https://looplipacker.s3.amazonaws.com/looplishop.json';

  try {
    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) {
      return NextResponse.json({ error: "Can't read JSON file" }, { status: 500 });
    }

    const json: { [index: string]: any } = await response.json();

    const last10Keys = Object.keys(json).sort().slice(-10);
    const result = last10Keys.reduce((acc, key) => {
      acc[key] = { price: json[key].price };
      return acc;
    }, {} as { [key: string]: { price: number } });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching or processing JSON:', error);
    return NextResponse.json({ error: 'Error fetching or processing JSON' }, { status: 500 });
  }
}