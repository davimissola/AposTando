from sqlmodel import SQLModel
from datetime import datetime



class BaseGame(SQLModel):
    pass


class GameCreate(BaseGame):
    pass


class GamePublic(BaseGame):
    total: float
    total_red: float
    total_blue: float
    aberto: bool