from schemas.game import GameCreate, GamePublic
from schemas.bet import BetCreate, BetPublic
from schemas.auth import UserPublic
from sqlmodel import Session, select
from db.models.game import Game
from db.models.bet import Bet
from db.models.auth import User
import random



OPCAO_BET = ('blue', 'red')


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
    game: GamePublic = session.exec(select(Game).where(Game.id == bet.id_game)).first()

    if not game:
        raise Exception('Jogo não encontrado.')
    if not game.aberto:
        raise Exception('Jogo não está aberto.')

    try:
        game.total = game.total + bet.valor
        if bet.opcao_escolhida == 'blue':
            game.total_blue = game.total_blue + bet.valor
        else:
            game.total_red = game.total_red + bet.valor

        return game
    except:
        raise Exception('Não foi possível atualizar jogo.')


def start_game_db(id_game: int, session: Session):
    game: GamePublic = session.exec(select(Game).where(Game.id == id_game)).first()

    if not game:
        raise Exception('Jogo não encontrado.')
    if not game.aberto:
        raise Exception('Jogo não está aberto.')

    # sortear entre BLUE or RED
    indice_vencedor = random.randint(0, 1)
    vencedor = OPCAO_BET[indice_vencedor]
    try:
        game.aberto = False
        bets: list[Bet] | None = session.exec(select(Bet).where(Bet.id_game == id_game, Bet.opcao_escolhida == vencedor)).all()
        for bet in bets:
            user: User = session.exec(select(User).where(User.id == bet.id_user)).first()
            user.saldo = user.saldo + (bet.valor * 2)
            session.commit()
        return vencedor
    except Exception as e:
        raise Exception(e)
    

    