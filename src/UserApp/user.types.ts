import { Prisma } from "../generated";

export type User = Prisma.UserGetPayload<{
    select: {
        id: true,
        email: true,
        username: true,
        firstname: true,
        lastname: true,
        posts: true,
    }
}>;
export type CreateUser = Prisma.UserCreateInput;