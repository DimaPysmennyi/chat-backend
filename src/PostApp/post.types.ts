import { Prisma } from "../generated";

export type Post = Prisma.PostGetPayload<{}>;
export type CreatePost = Prisma.PostCreateInput;
export type UpdatePost = Prisma.PostUpdateInput