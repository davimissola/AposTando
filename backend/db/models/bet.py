from schemas.bet import BaseBet
from sqlmodel import Field


class Bet(BaseBet, table=True):
    id: int | None = Field(primary_key=True, default=None)
    id_user: int