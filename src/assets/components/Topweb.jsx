import mainImg from "../image/main.jpg"
import "../styles/topweb.css";

export function Home() {
    return (
        <section id="home" className="Topweb">
            <div className="main-container">
                <div className="image">
                    <img width="459px" src={mainImg} alt="Foto Principal"/>
                </div>
                <div className="text-topweb">
                    <h1>Olá, Eu sou o <span>Felipe Alves</span></h1>
                    <p>
                        Desenvolvedor Frontend especializado em projetos responsivos. Esperiencia em HTML5, CSS3,
                         Javascript, buscando sempre projetos mais interativos, com codigos limpos e aprimorando 
                         as habilidades na prática.
                    </p>

                </div>
            </div>
        </section>
    )
}