import { client } from "../client/client";
import { handleError } from "../tools/handleError";
import { CreatePost, UpdatePost } from "./post.types";

async function getAllPosts(){
    try{
        const posts = client.post.findMany({});
        return posts;
    } catch(error){
        handleError(error);
    }
}

async function getPostById(id: number){
    try{
        const post = client.post.findUnique({
            where: {id}
        })
        return post;
    } catch (error){
        handleError(error);       
    }
}

async function createPost(data: CreatePost){
    try{
        const post = client.post.create({
            data: data,
            include: {
                postImages: true,
                postLinks: true
            }
        });
        return post;
    } catch (error){
        handleError(error);       
    }
}

async function updatePost(id: number, data: UpdatePost){
    try{
        const post = client.post.update({
            where: {id}, data: data
        })
        return post;
    } catch (error){
        handleError(error);     
    }
}

async function deletePost(id: number){
    try{
        const post = client.post.delete({
            where: {id}
        })
        return post;
    } catch (error){
        handleError(error);
    }
}

async function getPostsByUserId(userId: number){
    try{
        const post = client.post.findMany({
            where: {userId}
        })
        return post;
    } catch (error){
        handleError(error);
    }
}

export const repository = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getPostsByUserId
}