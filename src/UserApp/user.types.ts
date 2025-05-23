import { Prisma } from "../generated";

export type User = Prisma.UserGetPayload<{
    select: {
        id: true,
        email: true,
        username?: true,
        firstname?: true,
        lastname?: true,
        posts: true,
        image?: true,
        birthdate?: true
    }
}>;

export type CreateUser = Prisma.UserCreateInput;
export type UpdateUser = Prisma.UserUpdateInput;