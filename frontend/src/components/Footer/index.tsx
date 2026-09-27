import './footer.css'


export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div>
                    <h4>AposTando</h4>
                    <p>Sem dinheiro real. Projeto desenvolvido para estudo.</p>
                </div>
                <div className='div-navegacao-footer'>
                    <h4>Navegação</h4>
                    <a href="/#apostar">Apostar</a>
                    <a href='/#main'>Criar jogo</a>
                </div>
                <div className='div-contato-footer'>
                    <h4>Contato</h4>
                    <a href="https://www.linkedin.com/in/davimissola/?isSelfProfile=true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" /></svg>
                    </a>
                    <a href="https://github.com/davimissola">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                    </a>
                </div>
            </div>

            <div className='footer-bottom'>
                <h2>Davi Missola</h2>
            </div>
        </footer>
    )
}