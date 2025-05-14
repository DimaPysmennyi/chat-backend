import { client } from "../client/client";
import { errors, IErrors } from "../config/errorCodes";
import { Prisma } from "../generated";
import { CreatePost, UpdatePost } from "./post.types";

async function getAllPosts(){
    try{
        const posts = client.userPost.findMany({});
        return posts;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getPostById(id: number){
    try{
        const post = client.userPost.findUnique({
            where: {id}
        })
        return post;
    } catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }        
    }
}

async function createPost(data: CreatePost){
    try{
        const post = client.userPost.create({data});
        return post;
    } catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }        
    }
}

async function updatePost(id: number, data: UpdatePost){
    try{
        const post = client.userPost.update({
            where: {id}, data: data
        })
        return post;
    } catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }        
    }
}

async function deletePost(id: number){
    try{
        const post = client.userPost.delete({
            where: {id}
        })
        return post;
    } catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }        
    }
}

export const repository = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}