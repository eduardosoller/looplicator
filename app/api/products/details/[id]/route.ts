import { promises as fs } from "fs";
import path from 'path';

export async function GET(request: Request,
  { params }: { params: { id: string } }) {
  const url = path.join(process.cwd(), 'public', '/json/demo-store.json')
  const file = await fs.readFile(url, "utf8");
  const data = JSON.parse(file);
  const details = data[params.id]
  return Response.json(details)
}