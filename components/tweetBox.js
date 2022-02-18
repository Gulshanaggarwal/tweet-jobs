import { Tweet } from "react-static-tweets"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function TweetBox({ data, status }) {


    const handleShare = async (tweet_URL) => {

        const shareData = {
            text: `Hey are you looking for an opportunity then don't forget to check it out 👇`,
            url: tweet_URL

        }
        try {
            await navigator.share(shareData)

        } catch (error) {
            alert("couldn't share try again!")

        }
    }

    return (
        <main className="py-8 px-4">
            {
                status === "ok" && (data.length > 0 ? <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="1rem">
                        {
                            data.map((ele, index) => (
                                <div key={index} className="rounded-md border-1 border-gray-300 p-4">
                                    <button className="flex items-center space-x-1 p-2 border-1 border-gray-300 rounded-md m-2 bg-gray-100 hover:bg-blue-100">
                                        <p className="text-sm">Save for later</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                        </svg>
                                    </button>
                                    <Tweet id={ele.id} />
                                    <button type="button" className="flex justify-center items-center space-x-2 my-2 bg-twitter w-full py-3 text-white rounded-md" onClick={() => handleShare(ele.tweet_URL)}>
                                        <p>Share</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>
                                </div>
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry> : (
                    <p className="text-xl text-center py-4">Sorry,🤪 no results found try again!</p>
                ))
            }
        </main>
    )
}