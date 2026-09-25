from fastapi import FastAPI
from routes import auth, game, bet
from db.db import create_db
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware


origins = [
    'http://localhost:5173'
]


@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db()
    yield


app = FastAPI(lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)
app.include_router(auth.router)
app.include_router(game.router)
app.include_router(bet.router)


