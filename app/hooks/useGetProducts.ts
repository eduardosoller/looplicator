import { useFetch } from "./useFetch";
const api_url = process.env.NEXT_PUBLIC_API_URL

export const useGetProducts = ({ limit, page, order = 'desc' }: { limit: number, page: number, order?: string }): { data: any, error: any } => {
  const { data, error } = useFetch<any>(`${api_url}/products/${limit}/${page}/${order}`)
  return { data, error }
}