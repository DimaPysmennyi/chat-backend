import { Prisma } from "../generated";


export interface IError{
    status: string,
    message: string
}

export interface ISuccess<T>{
    status: string,
    data: T
}

export type User = Prisma.UserGetPayload<{
    select: {
        id: true,
        email: true,
        username: true,
        firstname: true,
        lastname: true,
    }
}>;
export type CreateUser = Prisma.UserCreateInput;