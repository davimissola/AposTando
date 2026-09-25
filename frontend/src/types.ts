export type LoginResponse = {
    access_token: string
    token_type: string
}


export type UserPublic = {
    nome: string
    id: number
    saldo: number
}


export type ApiError = {
    detail: string
}


export type GamePublic = {
    aberto: boolean
    total: number
    total_red: number
    total_blue: number
}


export type PropsViewsGame = {
    GamesOpen: GamePublic[]
}