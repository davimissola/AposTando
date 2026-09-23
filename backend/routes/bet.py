from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_current_user, SessionDep
from service.bet_service import create_bet_db
from schemas.bet import BetCreate, BetPublic
from schemas.auth import UserPublic
from typing import Annotated

# -> game -> id, total, total_azul, total_vermelho
# -> id, id_user, id_jogo, valor, qual_apostou
# logica : alguem cria o jogo -> usuario faz a bet -> jogo armazena total, total_azul, total_vermelho

router = APIRouter(prefix='/bet',
                   tags=['BETS'])



@router.post('/create', dependencies=[Depends(get_current_user)])
def create_bet(bet: BetCreate, current_user: Annotated[UserPublic, Depends(get_current_user)], session: SessionDep) -> BetPublic:
    try:
        bet_db = create_bet_db(bet, current_user.id, session)
    except Exception as error:
        raise HTTPException(status_code=400,
                            detail=str(error))

    return bet_db