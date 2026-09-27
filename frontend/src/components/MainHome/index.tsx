import './main-home.css'
import type { ApiError } from '../../types'




export function MainHome() {
    const token = localStorage.getItem('access_token')

    async function onCreateGame() {
        const response = await fetch('http://127.0.0.1:8000/game/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({})
        })
        if (!response.ok) {
            const dados: ApiError = await response.json()
            console.log(dados)
            alert('Erro ao criar jogo')
            return
        }
        window.location.reload()
    }
    return (
        <section className='class-main-home' id='main'>
            <div className='div-text-main'>
                <h1>AposTando</h1>
                <div>
                    <a href="#apostar">Apostar</a>
                    <button onClick={onCreateGame}>Criar Jogo</button>
                </div>
            </div>
        </section>
    )
}