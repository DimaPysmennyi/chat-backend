
import { uploadImage } from "../tools/uploadImage";
import { IError, ISuccess } from "../types/types";
import { repository } from "./post.repository";
import { CreatePost, Post, UpdatePost } from "./post.types";

async function getAllPosts(): Promise <IError | ISuccess<Post[]>>{
    const posts = await repository.getAllPosts();
    if (!posts){
        return {status: "error", message: "Posts Not Found"}
    }

    return {status: "success", data: posts}
}

async function getPostById(id: number): Promise <IError | ISuccess<Post>>{
    const post = await repository.getPostById(id);
    if (!post){
        return {status: "error", message: "Post Not Found"}
    }

    return {status: "success", data: post};
}

async function createPost(data: CreatePost): Promise <IError | ISuccess<Post>>{
    const post = await repository.createPost(data);
    if (!post){
        return {status: "error", message: "Post did not create"}
    }
    let images = post.images?.split(" ");
    if (images){
        for (let image of images){
            uploadImage(image);
        }
    }

    return {status: "success", data: post};
}

async function updatePost(id: number, data: UpdatePost): Promise <IError | ISuccess<Post>>{
    const post = await repository.updatePost(id, data);
    if (!post){
        return {status: "error", message: "Post did not update"}
    }

    return {status: "success", data: post};
}

async function deletePost(id: number): Promise <IError | ISuccess<Post>>{
    const post = await repository.deletePost(id);
    if (!post){
        return {status: "error", message: "Post deleted"}
    }

    return {status: "success", data: post};
}

async function getPostsByUserId(id: number): Promise <IError | ISuccess<Post[]>>{
    const posts = await repository.getPostsByUserId(id);
    if (!posts){
        return {status: "error", message: "Posts Not Found"}
    }

    return {status: "success", data: posts};
}

export const service = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getPostsByUserId
}