import { Header } from "../../components/Header";
import { DialogAposta } from "../../components/DialogAposta";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { UserPublic } from '../../types'
import { MainAposta } from "../../components/MainAposta";

export function Aposta() {
    const token = localStorage.getItem('access_token')
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState<UserPublic | null>(null)
    const [dialogFechada, setDialogFechada] = useState<boolean>(false)


    useEffect(() => {
        async function getAposta() {
            const response = await fetch('http://127.0.0.1:8000/bet/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (!response.ok) {
                navigate('/auth/login')
                return
            }
            const user: UserPublic = await response.json()
            setCurrentUser(user)
        }
        getAposta()
    }, [])
    return (
        <>  
            <Header />
            <DialogAposta currentUser={currentUser} setDialogFechada={setDialogFechada}/>
            <MainAposta dialogFechada={dialogFechada} setDialogFechada={setDialogFechada}/>
        </>
    )
}