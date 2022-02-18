import { LocalStateContext } from "../contexts/localStateProvider"
import { useContext } from "react"
//import { useSession } from "next-auth/react"

export default function Header() {

    const [, dispatch] = useContext(LocalStateContext);
    return <header className="flex justify-between px-4 py-4 bg-gray-100 shadow-inner 2xl:py-6 2xl:px-8">
        <div>
            <h1 className="text-xl text-twitter font-extrabold sm:text-2xl  2xl:text-3xl">TweetJOBS</h1>
        </div>
        <button type="button" className="bg-black text-white rounded-md px-4 py-2" onClick={() => dispatch({
            type: "showLogin",
            payload: true
        })}>Login</button>
    </header>
}