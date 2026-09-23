from schemas.game import GameCreate, GamePublic
from schemas.bet import BetCreate
from sqlmodel import Session, select
from db.models.game import Game




def create_game_db(game: GameCreate, session: Session) -> GamePublic:
    game_db = Game.model_validate(game)

    try:
        session.add(game_db)
        session.commit()
        session.refresh(game_db)
        return game_db
    except:
        session.rollback()
        raise


def views_games_abertos_db(session: Session) -> list[GamePublic]:
    games_abertos = session.exec(select(Game).where(Game.aberto == True)).all()
    return games_abertos


def atualizar_game(bet: BetCreate, session: Session) -> GamePublic:
    game: GamePublic = session.exec(select(Game).where(Game.id == bet.id_game))

    if not game:
        raise Exception('Jogo não encontrado.')
    if not game.aberto:
        raise Exception('Jogo não está aberto.')

    try:
        game.total = game.total - bet.valor
        if bet.opcao_escolhida == 'blue':
            game.total_blue = game.total_blue - bet.valor
        else:
            game.total_red = game.total_red - bet.valor

        return game
    except:
        raise Exception('Não foi possível atualizar jogo.')
    