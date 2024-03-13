export type TMessageModel = {
    message: string,
    id: number,
    side: 'left' | 'right'
}

export type TChatModel = {
    name : string
    id : number
    messages : TMessageModel[]
}