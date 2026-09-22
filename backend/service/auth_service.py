from sqlmodel import Session, select
from schemas.auth import UserCreate, UserPublic
from db.models.auth import User
from core.core import verify_senha_hash, create_senha_hash, DUMMY_HASH
import jwt
from config import settings




def create_user(user: UserCreate, session: Session) -> User:
    senha_hash = create_senha_hash(user.senha)
    user_db = User.model_validate(user, update={'senha': senha_hash})

    try:
        session.add(user_db)
        session.commit()
        session.refresh(user_db)
        return user_db
    except:
        session.rollback()
        raise


def get_user(nome: str, senha: str, session: Session) -> UserPublic | bool:
    user_db = session.exec(select(User).where(User.nome == nome)).first()

    if not user_db:
        verify_senha_hash(senha, DUMMY_HASH)
        return False
    if not verify_senha_hash(senha, user_db.senha):
        return False

    return user_db


def create_acess_token(data: dict):
    to_encoded = data.copy()
    encoded_jwt = jwt.encode(to_encoded, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt
