import { promises as fs } from "fs";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/public/json/demo-store.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const products = [];
  for (let key in data) {
    data[key].id = key
    products.push(data[key]);
  }
  return Response.json(products)
}