from schemas.game import BaseGame
from sqlmodel import Field


class Game(BaseGame, table=True):
    id: int | None = Field(primary_key=True, default=None)
    total: float = Field(default=0.0)
    total_red: float = Field(default=0.0)
    total_blue: float = Field(default=0.0)
    aberto: bool = Field(default=True)