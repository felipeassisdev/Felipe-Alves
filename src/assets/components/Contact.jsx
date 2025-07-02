import '../styles/contato.css'

export function Contact() {
    return (
        <section id="contact" className="contact-container">
            <div className="main-container">
                <h1 className="title">Entre em contato</h1>
                <p className="description">Como posso colaborar  com o seu projeto?</p>
                <div className="social-links">
                    <a href="https://github.com/felipeassisdev" target="_blank" title="Github"><i className="bi bi-github"></i></a>
                    <a href="https://instagram.com/itz._felipe1" target="_blank" title="Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/felipe-alves-791a3a282/" target="_blank" title="Linkedin"><i className="bi bi-linkedin"></i></a>
                    <a href="mailto:felipealves1484@gmail.com" target="_blank" title="Email"><i className="bi bi-envelope"></i></a>
                </div>
            </div>
        </section>
    )
}