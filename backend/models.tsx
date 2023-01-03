export type Exercise = {
    name: string,
    date: string,
    sets?: Set[]
}

export type Set = {
    repetitions: number,
    weight: number,
    rest: number
}

