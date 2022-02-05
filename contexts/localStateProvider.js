import { createContext, useReducer } from "react";



export const LocalStateContext = createContext();

const initialState = {
    loginWindow: null
}


const reducer = (state, action) => {
    switch (action.type) {
        case "showLogin":
            return {
                loginWindow: action.payload
            }
    }
}


export default function LocalContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LocalStateContext.Provider value={[state, dispatch]}>
            {children}
        </LocalStateContext.Provider>
    )
}