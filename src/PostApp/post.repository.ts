import { client } from "../client/client";
import { handleError } from "../tools/handleError";
import { CreatePost, UpdatePost } from "./post.types";

async function getAllPosts() {
	try {
		const posts = client.post.findMany({
			include: {
				images: true,
			},
		});
		return posts;
	} catch (error) {
		handleError(error);
	}
}

async function getPostById(id: number) {
	try {
		const post = await client.post.findUnique({
			where: { id },
			include: {
				images: true,
			},
		});
		return post;
	} catch (error) {
		handleError(error);
	}
}

async function createPost(data: CreatePost) {
    const {
        images = [],
        ...otherData
    } = data;

	try {
		const post = await client.post.create({
			data: {
                ...otherData
            },
		});
        if (images.length !== 0){
            await client.image.createMany({
                data: images.map((image) => ({
                    filename: image,
                    postId: post.id
                }))
            })
        }

        const postWithImages = await client.post.findUnique({
            where: {id: post.id},
            include: {images: true}
        })
        
		return postWithImages;
	} catch (error) {
		handleError(error);
	}
}

async function updatePost(id: number, data: UpdatePost) {
	try {
		const post = client.post.update({
			where: { id },
			data: data,
			include: {
				images: true,
			},
		});
		return post;
	} catch (error) {
		handleError(error);
	}
}

async function deletePost(id: number) {
	try {
		const post = client.post.delete({
			where: { id },
			include: {
				images: true,
			},
		});
		return post;
	} catch (error) {
		handleError(error);
	}
}

async function getPostsByUserId(userId: number) {
	try {
		const post = client.post.findMany({
			where: { userId },
			include: {
				images: true,
			},
		});
		return post;
	} catch (error) {
		handleError(error);
	}
}



export const repository = {
	getAllPosts,
	getPostById,
	createPost,
	updatePost,
	deletePost,
	getPostsByUserId,
};
