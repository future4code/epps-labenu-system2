export type classes = {
    id: string,
    name: string,
    email: string,
    start_date: Date,
    end_date: Date,
    module: modules
}

export enum modules {
    UM = 1,
    DOIS = 2,
    TRÊS = 3,
    QUATRO = 4,
    CINCO = 5,
    SEIS = 6,
    SETE = 7
}