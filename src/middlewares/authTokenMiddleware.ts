import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { TOKEN } from "../config/token";

interface IToken{
    iat: number,
    exp: number,
    id: number,
}

export function authTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    if (!authHeader){
        console.log(1)
        res.json({status: "error", message: "Did not get token"})
        return;
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token){
        console.log(2);
        res.json({status: "error", message: "Wrong token format"})
        return;
    }

    console.log(token);

    try{
        console.log(3);
        const newToken = verify(token, TOKEN) as IToken;
        console.log(newToken);
        res.locals.userId = newToken.id;
        next()
    } catch(error){
        res.json({status: "error", message: "Invalid token"})
    }
}