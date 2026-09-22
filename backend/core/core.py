from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()
DUMMY_HASH = password_hash.hash('dummypassword')



def create_senha_hash(senha: str) -> str:
    return password_hash.hash(senha)

def verify_senha_hash(senha: str, senha_hash: str) -> bool:
    return password_hash.verify(senha, senha_hash)