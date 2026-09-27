import { useRef } from 'react'
import './main-aposta.css'
import { useNavigate, useParams } from 'react-router-dom'
import type { ApiError, VencedorResponse } from '../../types'



export function MainAposta() {
    const { id } = useParams()
    const token = localStorage.getItem('access_token')
    const buttonStartRef = useRef<HTMLButtonElement | null>(null)
    const resultadoApostaRef = useRef<HTMLDivElement | null>(null)
    const navigate = useNavigate()
    let isBlue = true
    

    async function onStartPartida() {
        if (!buttonStartRef.current || !resultadoApostaRef.current ) {
            return
        }
        buttonStartRef.current.style.display = 'none'
        resultadoApostaRef.current.style.display = 'flex'

        const response = await fetch(`http://127.0.0.1:8000/game/start/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (!response.ok) {
            const dados: ApiError = await response.json()
            console.log(dados)
            alert(dados.detail)
            return
        }
        const dados: VencedorResponse = await response.json()

        const intervalVencedor = setInterval(() => {
            resultadoApostaRef.current!.style.backgroundColor = isBlue ? 'var(--vermelho-principal)' : 'var(--azul-principal)'
            isBlue = !isBlue
        }, 200)
        setTimeout(() => {
            resultadoApostaRef.current!.style.backgroundColor = dados.VENCEDOR == 'blue' ? 'var(--azul-principal)' : 'var(--vermelho-principal)'

            clearInterval(intervalVencedor)
        }, 5000)
        setTimeout(() => {
            navigate('/')
        }, 10000)
    }
    return (
        <section className='section-main-aposta'>
            <button onClick={onStartPartida} ref={buttonStartRef}>Começar Partida</button>

            <div className='resultado-aposta' ref={resultadoApostaRef}>
            </div>
        </section>
    )
}