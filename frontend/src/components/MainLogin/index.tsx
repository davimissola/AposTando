import { useNavigate } from 'react-router-dom'
import './main-login.css'
import type { LoginResponse } from '../../types'


export function MainLogin() {
    const navigate = useNavigate()

    async function onLoginAccount(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const username = formData.get('name')
        const password = formData.get('pwd')
        if (typeof username !== 'string' || typeof password !== 'string') {
            return
        }
        const body = new URLSearchParams({
            username: username,
            password: password,
        })

        const response = await fetch('http://127.0.0.1:8000/auth/login', {
            method: "POST",
            headers: {
                // content-type do login é diferente
                "Content-Type": "application/x-www-form-urlencoded"
            },
            // login espera TEXTO no lugar de um JSON ( OAuth2PasswordRequestForm do fastapi.security exige )
            body: body
        })
        const dados: LoginResponse = await response.json()

        if (!response.ok) {
            return
        }
        localStorage.setItem("access_token", dados.access_token)
        navigate('/')
    }
    return (
        <section className='section-login'>
            <form onSubmit={onLoginAccount}>
                <h2>Logar na Conta</h2>
                <div className='div-campo-form'>
                    <label htmlFor="name">Nome de usuário :</label>
                    <input type="text" id='name' name='name' placeholder='Username' required />
                </div>
                <div className='div-campo-form'>
                    <label htmlFor="pwd">Senha :</label>
                    <input type='password' id='pwd' name='pwd' placeholder='Password' required />
                </div>
                <button>Logar na Conta</button>
                <span>Não tem conta ainda? <a href="/auth/create">Crie uma</a></span>
            </form>
        </section>
    )
}