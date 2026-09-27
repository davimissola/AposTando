import { useEffect, useRef } from 'react'
import './dialog-aposta.css'
import FotoUser from '../../assets/fotouser.png'
import { useParams } from 'react-router-dom'
import type { PropsDialogAposta, ApiError, BetPublic } from '../../types'



export function DialogAposta({currentUser} : PropsDialogAposta) {
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    const token = localStorage.getItem('access_token')
    const { id } = useParams()

    useEffect(() => {
        dialogRef.current?.showModal()
    }, [])

    async function onApostar(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const opcao_escolhida = formData.get('opcao')
        const valor = Number(formData.get('valor'))
        const id_game = Number(id)

        const response = await fetch('http://127.0.0.1:8000/bet/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                'id_game': id_game,
                'valor': valor,
                'opcao_escolhida': opcao_escolhida,
            })
        })

        if (!response.ok) {
            const dados: ApiError = await response.json()
            console.log(dados)
            alert(dados.detail)
            return
        }
        const dados: BetPublic = await response.json()
        dialogRef.current?.close()
        return dados
    }
    return (
        <dialog ref={dialogRef} className='dialog-aposta'>
            <div className='header-dialog'>
                <span>
                    <img src={FotoUser} alt="Foto usuário" />
                    <h3>{currentUser?.nome}</h3>
                </span>
                <h4>R$ {currentUser?.saldo}</h4>
            </div>

            <form onSubmit={onApostar}>
                <div className='campo-form-aposta'>
                    <h4 className='h4-radio'>Apostar No</h4>
                             
                    <input type="radio" name='opcao' id='blue' value='blue' className='input-opcao' defaultChecked/>
                    <label htmlFor="blue" className='label-opcao label-blue'>Azul</label>

                    <input type="radio" name='opcao' id='red' value='red' className='input-opcao' />
                    <label htmlFor="red" className='label-opcao label-red'>Vermelho</label>
                </div>
                <div className='campo-form-aposta'>
                    <h4 className='h4-input'>Valor</h4>
                    <input type="number" className='input-valor' name='valor' placeholder='Ex: 1000' />
                </div>

                <button>Apostar</button>
            </form>
        </dialog>

    )
}