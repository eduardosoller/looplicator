import { useRouter } from 'next/router'
import data from 'data/123.json'
import loopURL from 'utils/loop-url'

export default function Page() {
  const router = useRouter()
  return <p>Post: {loopURL(data.date, data.id)}</p>
}
