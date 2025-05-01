import { Request, Response } from "express";
import userService from "./userService";

async function registerUser(req: Request, res: Response){
    const data = req.body;
    const result = await userService.registerUser(data);

    res.json(result);
}

async function authUser(req: Request, res: Response){
    const data = req.body;
    const result = await userService.authUser(data.email, data.password);

    res.json(result);
}

const userController = {
    registerUser: registerUser,
    authUser: authUser
}

export default userController;