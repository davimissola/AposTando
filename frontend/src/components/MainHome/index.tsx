import { useEffect } from 'react'
import './main-home.css'
import { useNavigate } from 'react-router-dom'




export function MainHome() {
    const navigate = useNavigate()

    useEffect(() => {
        async function getGamesOpen() {
            const token = localStorage.getItem('access_token')
            
            const response = await fetch('http://127.0.0.1:8000/game', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (!response.ok) {
                navigate('/auth/login')
                return
            }

            const dados = await response.json()
            console.log(dados)
        }
        getGamesOpen()
    }, [])
    return (
        <section className='class-main-home'>
            <div className='div-text-main'>
                <h1>AposTando</h1>
                <div>
                    <a href="#">Apostar</a>
                    <a href="#">Criar Jogo</a>
                </div>
            </div>
        </section>
    )
}