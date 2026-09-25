import type { PropsViewsGame } from '../../types'
import './views-games.css'



export function ViewsGames({ GamesOpen }: PropsViewsGame) {
    return (
        <section className="section-views-games" id='apostar'>
            { GamesOpen.map((game, i) => {
                console.log(game)
                return (
                    <a href='#' className='a-jogo'>
                        <div>
                            <h2>Jogo Aberto #{i+1}</h2>
                        </div>
                    </a>
                )
            })}
        </section>
    )
}