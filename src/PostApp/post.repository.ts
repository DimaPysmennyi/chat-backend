import { client } from "../client/client";
import { errors, IErrors } from "../config/errorCodes";
import { Prisma } from "../generated";
import { handleError } from "../tools/handleError";
import { CreatePost, UpdatePost } from "./post.types";

async function getAllPosts(){
    try{
        const posts = client.userPost.findMany({});
        return posts;
    } catch(error){
        handleError(error);
    }
}

async function getPostById(id: number){
    try{
        const post = client.userPost.findUnique({
            where: {id}
        })
        return post;
    } catch (error){
        handleError(error);       
    }
}

async function createPost(data: CreatePost){
    try{
        const post = client.userPost.create({
            data: data
        });
        return post;
    } catch (error){
        handleError(error);       
    }
}

async function updatePost(id: number, data: UpdatePost){
    try{
        const post = client.userPost.update({
            where: {id}, data: data
        })
        return post;
    } catch (error){
        handleError(error);     
    }
}

async function deletePost(id: number){
    try{
        const post = client.userPost.delete({
            where: {id}
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
    deletePost
}