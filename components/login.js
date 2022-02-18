import { LocalStateContext } from "../contexts/localStateProvider"
import { useContext, useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {

    const [state, dispatch] = useContext(LocalStateContext);
    const { data: session } = useSession();
    const router = useRouter();

    return state.loginWindow ? (
        <div className="fixed top-0 left-0 w-full py-20 bg-black-transparent h-full z-50">
            <div className="w-3/4 mx-auto bg-gray-100 rounded-md py-4 px-2 sm:w-1/3 xl:w-1/5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer float-right" onClick={() => dispatch({
                    type: "showLogin",
                    payload: null
                })} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <button className="bg-twitter  text-white rounded-md block mx-auto py-3 px-5 my-6" onClick={() => signIn('hazelbase')}>Sign in using Email</button>
            </div>
        </div>
    ) : (null)
}