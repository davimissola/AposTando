import { Link } from 'react-router-dom'
import type { PropsViewsGame } from '../../types'
import './views-games.css'



export function ViewsGames({ GamesOpen }: PropsViewsGame) {
    return (
        <section className="section-views-games" id='apostar'>
            { GamesOpen.length > 0 ? (
                GamesOpen.map((game, i) => {
                    return (
                        <Link to={`/aposta/${game.id}`} className='a-jogo'>
                            <div>
                                <h2>Jogo Aberto #{i+1}</h2>
                            </div>
                        </Link>
                    )
                })
            ) : (
                <h2 className='h2-sem-jogos'>Não há nenhum jogo aberto.</h2>
            )}

        </section>
    )
}