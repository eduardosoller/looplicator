import { useFetch } from "./useFetch";
const api_url = process.env.NEXT_PUBLIC_API_URL

export const useGetDetails = (id: string): { data: Product, error: any } => {
  const { data, error } = useFetch<any>(`${api_url}/products/details/${id}`)
  return { data, error }
}