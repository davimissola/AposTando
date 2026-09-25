import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainHome } from "../../components/MainHome";
import { ViewsGames } from "../../components/ViewsGames";
import { useNavigate } from "react-router-dom";
import type { GamePublic } from '../../types'


export function Home() {
    const [GamesOpen, setGameOpen] = useState<GamePublic[]>([])
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
            setGameOpen(dados)
        }
        getGamesOpen()
    }, [])

    return (
        <>  
            <Header />
            <MainHome />
            <ViewsGames GamesOpen={GamesOpen}/>
        </>
    )
}