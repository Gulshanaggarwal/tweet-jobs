import TextLoop from "react-text-loop";

export default function SearchBox() {
    return <section className="bg-blue-500">
        <TextLoop interval={1000}>
            <p>Hello</p>
            <p>Hi</p>
        </TextLoop>
        <form>
            <input type="text" />
        </form>
    </section>
}