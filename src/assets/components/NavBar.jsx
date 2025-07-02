import '../styles/navbar.css'

export function Header(){
    return(
    <header>
        <nav>
            <div className="nav-container">
                <div className="nav-logo">
                <h1>Felipe <span>Alves</span></h1>
            </div>
            <div className="nav-links">
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Conhecimetos</a>
                <a href="">Contato</a>
            </div>
            </div>
        </nav>
    </header>
    )
}