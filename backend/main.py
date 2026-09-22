from fastapi import FastAPI
from routes import auth
from db.db import create_db
from contextlib import asynccontextmanager





@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db()
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(auth.router)


