import { useNavigate } from 'react-router-dom'
import './main-create.css'


export function MainCreate() {
    const navigate = useNavigate()

    async function onCreateAccount(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const username: FormDataEntryValue | null = formData.get('name')
        const password: FormDataEntryValue | null = formData.get('pwd')
        
        const response = await fetch('http://127.0.0.1:8000/auth/create', {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify({
                'nome': username,
                'senha': password,
            })
        })
        const dados = await response.json()
        
        if (!response.ok) {
            console.log(dados.detail)
            return
        }

        navigate('/auth/login')
    }
    return (
        <section className='section-create'>
            <form onSubmit={onCreateAccount}>
                <h2>Criar Conta</h2>
                <div className='div-campo-form'>
                    <label htmlFor="name">Nome de usuário :</label>
                    <input type="text" id='name' name='name' placeholder='Username' required />
                </div>
                <div className='div-campo-form'>
                    <label htmlFor="pwd">Senha :</label>
                    <input type='password' id='pwd' name='pwd' placeholder='Password' required />
                </div>
                <button>Criar Conta</button>
            </form>
        </section>
    )
}