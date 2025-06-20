import { Contact } from "./Contact"
import { Header } from "./NavBar"
import { Home } from "./Topweb"
import { Projects } from "./Projects"
import { Knowledge } from "./Knowledge"
export function Main(){
    return(
        <>
        <Header/>
        <Home/>
        <Projects/>
        <Knowledge/>
        <Contact/>
        </>
    )
}

