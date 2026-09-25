from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from schemas.auth import UserCreate, UserPublic
from dependencies import SessionDep, get_current_user
from service.auth_service import create_user, get_user, create_acess_token
from typing import Annotated



router = APIRouter(prefix='/auth',
                   tags=['AUTH'])



@router.post('/login')
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], session: SessionDep) -> dict:
    user_db = get_user(form_data.username, form_data.password, session)

    if not user_db:
        raise HTTPException(
            status_code=404,
            detail="Usuário não encontrado."
        )
    
    token = create_acess_token(data={'sub': form_data.username})
    return {'access_token': token,
            'token_type': 'bearer'
            }

@router.post('/create')
async def create(user: UserCreate, session: SessionDep) -> UserPublic:
    print('chegou')
    user_db = create_user(user, session)
    
    if not user_db:
        raise HTTPException(
            status_code=400,
            detail="Não foi possível criar usuário."
        )

    return user_db


