export type classes = {
    id: number,
    name: string,
    start_date: string,
    end_date: string,
    module: number,
    type: TYPE
}

export enum TYPE {
    INTEGRAL = "integral",
    NOTURNO = "noturno"
}

