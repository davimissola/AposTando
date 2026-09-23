from fastapi import APIRouter, HTTPException, Depends
from schemas.game import GameCreate, GamePublic
from dependencies import SessionDep, get_current_user
from service.game_service import create_game_db, views_games_abertos_db



router = APIRouter(prefix='/game',
                   tags=['GAME'])



@router.post('/create', dependencies=[Depends(get_current_user)])
def create_game(game: GameCreate, session: SessionDep) -> GamePublic:
    game_db = create_game_db(game, session)

    if not game_db:
        raise HTTPException(status_code=400,
                            detail='Não foi possível criar jogo.')

    return game_db


@router.get('/', dependencies=[Depends(get_current_user)])
def views_games_abertos(session: SessionDep) -> list[GamePublic]:
    games_abertos = views_games_abertos_db(session)
    return games_abertos