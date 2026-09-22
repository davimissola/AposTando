from sqlmodel import create_engine, SQLModel, Session
from db.models.auth import User



sqlite_file_name = 'apostando.db'
sqlite_url = f'sqlite:///{sqlite_file_name}'
connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)



def create_db():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session