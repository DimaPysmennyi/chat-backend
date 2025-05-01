import { Prisma } from "../generated";


export interface IError{
    status: string,
    message: string
}

export interface ISuccess<T>{
    status: string,
    data: T
}

export type User = Prisma.UserGetPayload<{}>;
export type CreateUser = Prisma.UserCreateInput;