from sqlmodel import SQLModel
from enum import Enum


class OpcaoBet(str, Enum):
    RED = 'red'
    BLUE = 'blue'


class BaseBet(SQLModel):
    id_game: int
    valor: float
    opcao_escolhida: OpcaoBet


class BetCreate(BaseBet):
    pass


class BetPublic(BaseBet):
    pass