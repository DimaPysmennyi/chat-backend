import { Prisma } from "../generated";

export type Post = Prisma.PostGetPayload<{
	include: {
		images: true;
	};
}>;
export type CreatePost = Prisma.PostGetPayload<{
	omit: {
		id: true;
		views: true;
		likes: true;
	};
}> & {
	images: string[];
};

export type Image = Prisma.ImageGetPayload<{}>

export type UpdatePost = Prisma.PostUpdateInput;

export interface CreatePostData {
	title: string;
	topic: string;
	content: string;
	tags?: string;
	links?: string;
	images?: string;
	userId: number;
}
