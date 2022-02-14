import { LocalStateContext } from "../contexts/localStateProvider"
import { useContext, useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {

    const [, dispatch] = useContext(LocalStateContext);
    const { data: session } = useSession();
    console.log("session", session);

    return (
        <div className="fixed top-0 left-0 w-full py-20 bg-black-transparent h-full">
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
                <button onClick={() => signIn()}>Login with HazelBase</button>
            </div>
        </div>
    )
}