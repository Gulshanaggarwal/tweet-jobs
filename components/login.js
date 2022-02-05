import { LocalStateContext } from "../contexts/localStateProvider"
import { useContext } from "react"

export default function Login() {

    const [, dispatch] = useContext(LocalStateContext)
    return (
        <div className="absolute top-0 left-0 w-full py-20 bg-black-transparent h-full">
            <div className="w-1/3 mx-auto bg-gray-100 rounded-md py-4 px-2">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-medium">Login</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" onClick={() => dispatch({
                        type: "showLogin",
                        payload: null
                    })} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                <form className="py-4">
                    <div className="bg-gray-200 flex py-3 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input type="text" placeholder="Enter your Email" className="outline-none bg-gray-200 ml-2 w-5/6" />
                    </div>
                    <button className="bg-twitter text-white rounded-md w-full mt-2 py-2">Continue</button>
                </form>
            </div>
        </div>
    )
}