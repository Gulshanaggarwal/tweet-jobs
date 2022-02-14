import { Tweet } from "react-static-tweets";
import Header from "../components/header";
import SearchBox from "../components/searchBox";
import { useRouter } from "next/router";
import { useState } from "react";
import TweetBox from "../components/tweetBox";
import { useQuery } from "react-query";


export default function Search() {

    const [max_result, setMaxResult] = useState(5);
    const router = useRouter();
    const { q } = router.query;

    const { data: result, error, isLoading } = useQuery(["GetPosts", q, max_result], () => fetch("/api/tweets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ max_result, q })
    }).then(res => res.json()))






    return (
        <div>
            <Header />
            <SearchBox />
            {isLoading && <p className="text-center py-4 text-2xl">Loading....</p>}
            {result && result.status === "ok" && result.data.length > 0 && <TweetBox data={result.data} />}
            <button type="button" className="bg-twitter rounded-md py-3 w-95P mx-auto block font-medium text-white" onClick={() => setMaxResult(max_result + 3)}>Load More..</button>
        </div>
    )

}