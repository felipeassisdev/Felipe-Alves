import python from "../image/python.png"
import npm from "../image/npm.png"
import horaInteligete from "../image/site.png"
import codeSnap from "../image/site (2).png"
import "../styles/projetos.css";

export function Projects() {
    return (
        <section id="projetc" className="projects-container">
            <h1>Projetos</h1>
            <div className="main-container">
                <div className="projects-grid">
                    <div className="project-card">
                        <img src={python} alt="Spicetify" />
                        <h2>Spicetify</h2>
                        <p>Automação para a instalação do spicetify</p>
                        <a href="https://github.com/felipeassisdev/Spicetify" className="github-link"> <i className="bi bi-github"></i> Ver no Github</a>
                    </div>

                    <div className="project-card">
                        <img src={npm} alt="Nome do projeto" />
                        <h2>SearchInput</h2>
                        <p>Cria um sistema de busca onde, conforme você digita no campo de pesquisa, as divs visíveis vão sendo filtradas com base no texto que foi digitado.</p>
                        <a href="https://github.com/felipeassisdev/SearchInput" className="github-link"> <i className="bi bi-github"></i> Ver no Github</a>
                    </div>
                    <div className="project-card">
                        <img src={npm} alt="Nome do projeto" />
                        <h2>Hours</h2>
                        <p>Cria um relógio digital que atualiza automaticamente a cada segundo, exibindo o horário atual no formato `HH:MM:SS`.</p>
                        <a href="https://github.com/felipeassisdev/hours" className="github-link"> <i className="bi bi-github"></i> Ver no Github</a>
                    </div>
                    <div className="project-card">
                        <img src={npm} alt="Nome do projeto" />
                        <h2>ShowAlert</h2>
                        <p>Um módulo simples de alerta em JavaScript para exibir mensagens personalizadas na web.</p>
                        <a href="https://github.com/felipeassisdev/ShowAlert" className="github-link"> <i className="bi bi-github"></i> Ver no Github</a>
                    </div>
                    <div className="project-card">
                        <img src={horaInteligete} alt="Nome do projeto" />
                        <h2>Hora Inteligente</h2>
                        <p>Um sistema de hora em HTML, CSS, JS, com função determinada para uma certa hora do dia, aparecerá uma frase embaixo da hora.</p>
                        <a href="https://github.com/felipeassisdev/Hora-Inteligente" className="github-link"> <i className="bi bi-github"></i> Ver no Github</a>
                    </div>
                    <div className="project-card">
                        <img src={codeSnap} alt="Nome do projeto" />
                        <h2>CodeSnap</h2>
                        <p>Aprenda e prático com o CodeSnap. O clique certo para dominar a programação</p>
                        <a href="https://github.com/felipeassisdev/CodeSnap" className="github-link"> <i className="bi bi-github"></i> Ver no Github</a>
                    </div>

                </div>
            </div>
        </section>
    )
}