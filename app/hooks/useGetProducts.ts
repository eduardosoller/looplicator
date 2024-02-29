import { useFetch } from "./useFetch";
const api_url = process.env.NEXT_PUBLIC_API_URL

export const useGetProducts = ({ limit, page }: { limit: number, page: number }): { data: any, error: any } => {
  const { data, error } = useFetch<any>(api_url + '/products/' + limit + '/' + page)
  return { data, error }
}