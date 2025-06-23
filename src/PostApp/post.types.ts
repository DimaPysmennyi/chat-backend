import { Prisma } from "../generated";

export type Image = Prisma.ImageGetPayload<{}>

export type Post = Prisma.PostGetPayload<{}>;
export type CreatePost = Prisma.PostUncheckedCreateInput;
export type UpdatePost = Prisma.PostUpdateInput

export interface CreatePostData {
    title: string,
    topic: string,
    content: string,
    tags?: string,
    links?: string,
    images?: string,
    userId: number,

}