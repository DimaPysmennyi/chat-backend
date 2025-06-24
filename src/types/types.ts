export interface IError{
    status: string,
    message: string
}

export interface ISuccess<T>{
    status: string,
    data: T
}

export type Result<T> = IError | ISuccess<T>