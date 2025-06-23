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

export type CreateUser = Prisma.UserUncheckedCreateInput;
export type CreateAlbum = Prisma.AlbumUncheckedCreateInput;
export type CreateFriend = Prisma.FriendUncheckedCreateInput;
export type UpdateAlbum = Prisma.AlbumUncheckedUpdateInput;

export type UpdateUser = Prisma.UserUncheckedUpdateInput;