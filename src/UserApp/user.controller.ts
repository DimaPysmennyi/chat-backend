import { Request, Response } from "express";
import { userService } from "./user.service";

async function registerUser(req: Request, res: Response){
    const {code, ...data} = req.body;
    userService.saveCode(data.email, code);
    const codeResult = await userService.verifyCode(data.email, code);
    
    if (codeResult.status == "error"){
        res.json(codeResult);
        return
    }

    const result = await userService.registerUser(data);
    res.json(result);
}

async function authUser(req: Request, res: Response){
    const {email, password} = req.body;
    const result = await userService.authUser(email, password);

    res.json(result);
}

async function getUserByToken(req: Request, res: Response){
    const result = await userService.getUserById(Number(res.locals.userId))
    res.json(result);
}

async function sendCode(req: Request, res: Response){
    const { email } = req.body;
    const result = await userService.sendCode(email);
    console.log(result);
    res.json(result);
}

export const userController = {
    registerUser: registerUser,
    authUser: authUser,
    getUserByToken: getUserByToken,
    sendCode: sendCode
}
