from sqlmodel import SQLModel


class BaseUser(SQLModel):
    nome: str

class UserCreate(BaseUser):
    senha: str

class UserPublic(BaseUser):
    id: int
    saldo: float