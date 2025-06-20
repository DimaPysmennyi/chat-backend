import { Prisma } from "../generated";

export type User = Prisma.UserGetPayload<{
    select: {
        id: true,
        email: true,
        username?: true,
        firstname?: true,
        lastname?: true,
        posts: true,
        albums: true,
        friends: true,
        image?: true,
        birthdate?: true
    }
}>;

export type Album = Prisma.AlbumGetPayload<{}>;
export type Friend = Prisma.FriendGetPayload<{}>;

export type CreateUser = Prisma.UserCreateInput;
export type CreateAlbum = Prisma.AlbumCreateInput;
export type CreateFriend = Prisma.FriendCreateInput;

export type UpdateUser = Prisma.UserUpdateInput;