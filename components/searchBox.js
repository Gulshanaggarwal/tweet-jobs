import TextLoop from "react-text-loop";
import { useState, useContext } from "react"
import { useRouter } from "next/router";
import { LocalStateContext } from "../contexts/localStateProvider";

const hint = [
    "intern",
    "internship",
    "full-time",
    "part-time",
    "full-stack",
    "android",
    "react",
    "node",
    "javascript",
    "android",
    "kotlin",
    "java",
    "python",
    "nextjs",
    "sales",
    "engineering",
    "marketing",
    "developer",
    "programmer",
    "coder",
    "C",
    "c++",
    "open source",
    "paid",
    "summer-intern",
    "html",
    "css",
    "freelancing",
    "machine learning",
    "ML",
    "security",
    "cyber security",
    "manager",
    "web developer",
    "ruby",
    "content writer",
    "graphic designer",
    "game developer",
    "c#",
    "unity"

]

export default function SearchBox() {

    const [state, dispatch] = useContext(LocalStateContext);
    const [list, setList] = useState([]);

    const router = useRouter();

    const handleOnchange = (e) => {

        const val = e.target.value;
        const filtered = hint.filter((ele) => {
            if (ele.search(val) !== -1 && val !== "") return ele
        });
        setList(filtered);
        dispatch({
            type: "handleSearchValue",
            payload: val
        })

    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (state.searchValue !== "") {
            const params = router.query;

            router.push({
                pathname: "/search",
                query: {
                    ...params,
                    q: state.searchValue
                }
            })
        }
    }

    return <section className="bg-twitter py-8">
        <div className="text-center text-xl font-medium text-gray-100 sm:text-2xl xl:text-3xl">
            <TextLoop interval={1000}>
                <h3>Search for remote jobs here</h3>
                <h3>Search for full-time jobs here</h3>
            </TextLoop>
        </div>
        <form className="relative bg-gray-100 rounded-md w-3/4 mx-auto my-8 sm:w-1/2 xl:w-1/3">
            <input value={state.searchValue} className="h-12 w-5/6 rounded-md outline-none px-3" type="text" placeholder="jobs,skills..." onChange={handleOnchange} />
            <button type="submit" className="bg-blue-100 rounded-md w-1/6 h-12" onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>
            {
                list.length > 0 && <ul className="absolute top-14 z-49 overflow-y-auto h-36 border-1 border-gray-300 rounded-lg w-full">
                    {list.map((ele, index) => (
                        <li key={index} className="bg-gray-100 p-3 cursor-pointer border-b-1 border-gray-400 font-light text-gray-900 capitalize" onClick={(e) => {
                            const params = router.query;

                            router.push({
                                pathname: "/search",
                                query: {
                                    ...params,
                                    q: e.target.innerHTML
                                }
                            })

                            dispatch({
                                type: "handleSearchValue",
                                payload: e.target.innerHTML
                            })
                            setList([])

                        }}>{ele}</li>
                    ))}
                </ul>
            }
        </form>
    </section>
}