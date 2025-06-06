import { Request, Response } from "express";
import { service } from "./user.service";

async function registerUser(req: Request, res: Response){
    const {code, ...data} = req.body;
    service.saveCode(data.email, code);
    const codeResult = await service.verifyCode(data.email, code);
    
    if (codeResult.status == "error"){
        res.json(codeResult);
        return
    }

    const result = await service.registerUser(data);
    res.json(result);
}

async function authUser(req: Request, res: Response){
    const {email, password} = req.body;
    const result = await service.authUser(email, password);

    res.json(result);
}

async function getAllUsers(req: Request, res: Response){
    const result = await service.getAllUsers();
    res.json(result);
}

async function getUserById(req: Request, res: Response){
    const id = +req.params.id;
    const result = await service.getUserById(id);
    res.json(result);
}

async function updateUser(req: Request, res: Response){
    const id = +req.params.id;
    const result = await service.updateUser(id, req.body)
    res.json(result);
}

async function getUserByToken(req: Request, res: Response){
    const result = await service.getUserById(Number(res.locals.userId))
    res.json(result);
}

async function sendCode(req: Request, res: Response){
    const { email } = req.body;
    const result = await service.sendCode(email);
    console.log(result);
    res.json(result);
}

async function getUserAlbums(req: Request, res: Response){
    const result = await service.getUserAlbums(+req.params.id);
    res.json(result);
}

async function getAllFriends(req: Request, res: Response){
    console.log(res.locals.id)
    const result = await service.getAllFriends(Number(+req.params.id));
    res.json(result);
}

async function createAlbum(req: Request, res: Response){
    const data = req.body;
    const result = await service.createAlbum(data);
    res.json(result);
}

async function addFriend(req: Request, res: Response){
    const data = req.body;
    const result = await service.addFriend(+req.params.id, +data.id);
    res.json(result);
}

async function deleteFriend(req: Request, res: Response){
    const data = req.body;
    const result = await service.deleteFriend(+req.params.id, +data.id);
    res.json(result);
}

export const controller = {
    registerUser,
    authUser,
    getUserById,
    getAllUsers,
    updateUser,
    getUserByToken,
    sendCode,
    getUserAlbums,
    getAllFriends,
    createAlbum,
    addFriend,
    deleteFriend
}
