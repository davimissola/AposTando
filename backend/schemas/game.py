from sqlmodel import SQLModel
from datetime import datetime



class BaseGame(SQLModel):
    data_encerramento: datetime


class GameCreate(BaseGame):
    pass


class GamePublic(BaseGame):
    total: float
    total_red: float
    total_blue: float
    aberto: bool