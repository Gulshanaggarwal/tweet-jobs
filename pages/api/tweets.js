


const FetchTweets = async (req, res) => {


    const { max_result, q } = req.body;

    const tweetQuery = `(hire OR hiring OR \"looking for\" OR internship OR intern OR freelance OR apprentice) -\"hire me\" -\"hire us\" -\"check my\" -\"pls hire\" ${q} `
    const newestID = ""
    const response = await fetch(`https://api.twitter.com/1.1/search/tweets.json?count=${max_result}&${newestID ? `since_id=${newestID}&` : ""
        }q=${tweetQuery}&tweet_mode=extended&include_entities=false&lang=en&result_type=recent`, {
        headers: {
            Authorization: "Bearer " + process.env.BEARER_TOKEN

        }
    })

    const data = await response.json();
    const getIDS = [];
    data.statuses.forEach((ele) => getIDS.push({ id: ele.id_str, tweet_URL: `https://twitter.com/${ele.user.screen_name}/status/${ele.id_str}` }))



    res.status(200).json({ status: "ok", data: getIDS })
}

export default FetchTweets