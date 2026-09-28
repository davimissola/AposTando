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
    id: number
    aberto: boolean
    total: number
    total_red: number
    total_blue: number
}

export type BetPublic = {
    id_game: number
    valor: number
    opcao_escolhida: 'red' | 'blue'
}

export type VencedorResponse = {
    VENCEDOR: string
}



export type PropsViewsGame = {
    GamesOpen: GamePublic[]
}

export type PropsDialogAposta = {
    currentUser: UserPublic | null
    setDialogFechada: React.Dispatch<React.SetStateAction<boolean>>
}

export type PropsMainAposta = {
    dialogFechada: boolean
    setDialogFechada: React.Dispatch<React.SetStateAction<boolean>>
}