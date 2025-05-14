import { Request, Response } from "express";
import { service } from "./post.service";

async function getAllPosts(req: Request, res: Response){
    const result = await service.getAllPosts();
    res.json(result);
}

async function getPostById(req: Request, res: Response){
    const result = await service.getPostById(+req.params.id);
    res.json(result);
}

async function createPost(req: Request, res: Response){
    const result = await service.createPost(req.body);
    res.json(result);
}

async function updatePost(req: Request, res: Response){
    const result = await service.updatePost(+req.params.id, req.body);
    res.json(result);
}

async function deletePost(req: Request, res: Response){
    const result = await service.deletePost(+req.params.id)
    res.json(result);
}


export const controller = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}