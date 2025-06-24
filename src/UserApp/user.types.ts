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
        image?: true,
        birthdate?: true
    }
}>;

export type Album = Prisma.AlbumGetPayload<{}>;

export type CreateUser = Prisma.UserUncheckedCreateInput;
export type CreateAlbum = Prisma.AlbumUncheckedCreateInput;
export type UpdateAlbum ={
    id?: number;
    name?: string;
    createdAt?: Date;
    previewImage?: string | null;
    userId?: number;
    shown?: boolean;
    topic?: string;
    images: string[]
};

export type UpdateUser = Prisma.UserUncheckedUpdateInput;