import { useEffect } from 'react'
import './views-games.css'



export function ViewsGames() {
    useEffect(() => {
        async function ViewsGamesAbertos() {
            const response = await fetch('')
            const games = await response.json()
            return games
        }
        ViewsGamesAbertos()
    }, [])

    return (
        <section className="section-views-games">
            <p>ola</p>
        </section>
    )
}