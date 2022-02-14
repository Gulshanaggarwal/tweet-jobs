import { createContext, useReducer } from "react";



export const LocalStateContext = createContext();

const initialState = {
    loginWindow: null,
    searchValue: ""
}


const reducer = (state, action) => {
    switch (action.type) {
        case "showLogin":
            return {
                loginWindow: action.payload
            }
        case "handleSearchValue":
            return {
                searchValue: action.payload
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