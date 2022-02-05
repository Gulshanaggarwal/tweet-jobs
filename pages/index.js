import Header from "../components/header";
import Login from "../components/login";
import SearchBox from "../components/searchBox";
import { LocalStateContext } from "../contexts/localStateProvider";
import { useContext } from "react";


export default function Home() {

  const [state] = useContext(LocalStateContext)
  return (
    <div>
      <Header />
      <SearchBox />
      {state.loginWindow && <Login />}
    </div>
  )
}
