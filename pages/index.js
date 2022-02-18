import { useContext } from "react";
import { useQuery } from "react-query";
import Header from "../components/header";
import Login from "../components/login";
import SearchBox from "../components/searchBox";
import TweetBox from "../components/tweetBox";
import { LocalStateContext } from "../contexts/localStateProvider";

export default function Home() {

  const [state] = useContext(LocalStateContext);

  const { data: result, error, isLoading } = useQuery('OnlyGet', () => fetch("/api/tweets").then((res) => res.json()))

  return (
    <div>
      <Header />
      <SearchBox />
      {state.loginWindow && <Login />}
      {isLoading && <p className="text-center py-4 text-2xl">Loading....</p>}
      {result && result.status === "ok" && result.data.length > 0 && <TweetBox data={result.data} />}
    </div>
  )
}
