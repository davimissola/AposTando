from schemas.auth import BaseUser
from sqlmodel import Field

class User(BaseUser, table=True):
    id: int | None = Field(primary_key=True, default=None)
    senha: str
    saldo: float | None = Field(default=1000.0)