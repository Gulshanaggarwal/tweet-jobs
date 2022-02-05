import { LocalStateContext } from "../contexts/localStateProvider"
import { useContext } from "react"

export default function Header() {

    const [, dispatch] = useContext(LocalStateContext)
    return <header className="flex justify-between px-8 py-4 bg-gray-100 shadow-inner">
        <div>
            <h1 className="text-xl text-twitter font-extrabold">TweetJOBS</h1>
        </div>
        <button type="button" className="text-xl" onClick={() => dispatch({
            type: "showLogin",
            payload: true
        })}>Login</button>
    </header>
}