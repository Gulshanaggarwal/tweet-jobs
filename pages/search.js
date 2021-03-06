import { Tweet } from "react-static-tweets";
import SearchBox from "../components/searchBox";
import { useRouter } from "next/router";
import { useState } from "react";
import TweetBox from "../components/tweetBox";
import { useQuery } from "react-query";


export default function Search() {

    const [max_result, setMaxResult] = useState(15);
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
            <SearchBox />
            {isLoading && <p className="text-center py-4 text-2xl">Loading....</p>}
            {result && <TweetBox data={result.data} status={result.status} />}
            {result && max_result <= 50 && result.status === "ok" && result.data.length > 0 && <button type="button" className="bg-twitter rounded-md py-3 w-95P mx-auto block font-medium text-white" onClick={() => setMaxResult(max_result + 5)}>Load More..</button>}
        </div>
    )

}