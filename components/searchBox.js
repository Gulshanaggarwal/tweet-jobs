import TextLoop from "react-text-loop";
import { useState } from "react"

const hint = [
    "intern",
    "internship",
    "full-time",
    "part-time",
    "full-stack",
    "android",
    "React",
    "Node",
    "javascript",
]

export default function SearchBox() {

    const [searchValue, setSearchValue] = useState("");
    const [list, setList] = useState([]);

    const handleSearch = (e) => {

        const val = e.target.value.trim();
        const filtered = hint.filter((ele) => {
            if (ele.search(val) !== -1) return ele
        });
        setList(filtered);
        setSearchValue(val);

    }

    return <section className="bg-twitter py-8">
        <div className="text-center text-2xl font-medium text-gray-100">
            <TextLoop interval={1000}>
                <h3>Search for remote jobs here</h3>
                <h3>Search for full-time jobs here</h3>
            </TextLoop>
        </div>
        <form className="relative bg-gray-100 rounded-md w-96 mx-auto my-8">
            <input value={searchValue} className="h-12 w-5/6 rounded-md outline-none px-3" type="text" placeholder="jobs,skills..." onChange={handleSearch} />
            <button className="bg-blue-100 rounded-md w-1/6 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>
            <ul className="absolute top-14">
                {list.length > 0 && list.map((ele) => (
                    <li className="bg-gray-100 rounded-md w-96 p-3 my-1 cursor-pointer" onClick={(e) => {
                        setSearchValue(e.target.innerHTML)
                        setList([])
                    }}>{ele}</li>
                ))}
            </ul>
        </form>
    </section>
}