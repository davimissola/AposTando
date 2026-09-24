from schemas.bet import BetCreate, BetPublic
from service.game_service import atualizar_game
from service.auth_service import atualizar_user
from db.models.bet import Bet
from sqlmodel import Session





def create_bet_db(bet: BetCreate, id_user: int, session: Session) -> BetPublic:
    bet_db = Bet.model_validate(bet,
                                update={'id_user': id_user}
                                )
    try:
        atualizar_game(bet_db, session)
        atualizar_user(bet_db, session)
    except Exception as error:
        raise Exception(error)

    try:
        session.add(bet_db)
        session.commit()
        session.refresh(bet_db)
        return bet_db
    except:
        session.rollback()
        raise Exception('Não foi possível criar bet.')