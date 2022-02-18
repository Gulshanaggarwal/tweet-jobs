import Login from "../components/login";
import SearchBox from "../components/searchBox";
import TweetBox from "../components/tweetBox";
import { useQuery } from "react-query";


export default function Home() {

  const { data: result, error, isLoading } = useQuery('OnlyGet', () => fetch("/api/tweets").then((res) => res.json()))

  return (
    <div>
      <SearchBox />
      {isLoading && <p className="text-center py-4 text-2xl">Loading....</p>}
      {result && <TweetBox data={result.data} status={result.status} />}
    </div>
  )
}
