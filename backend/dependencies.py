from db.db import get_session
from typing import Annotated
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session, select
import jwt
from config import settings
from db.models.auth import User
from schemas.auth import UserPublic
oauth2_schema = OAuth2PasswordBearer(tokenUrl='/auth/login')





SessionDep = Annotated[Session, Depends(get_session)]


def get_current_user(token: Annotated[str, Depends(oauth2_schema)], session: SessionDep) -> UserPublic:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        nome = payload.get('sub')
        user = session.exec(select(User).where(User.nome == nome)).first()
        if not user:
            raise HTTPException(status_code=401, detail="Usuário não encontrado.")
        return user
    except:
        raise HTTPException(status_code=401, detail="Usuário não autorizado.")
