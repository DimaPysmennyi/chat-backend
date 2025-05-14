import { Prisma } from "../generated";

export type Post = Prisma.UserPostGetPayload<{}>;
export type CreatePost = Prisma.UserPostCreateInput;
export type UpdatePost = Prisma.UserPostUpdateInput