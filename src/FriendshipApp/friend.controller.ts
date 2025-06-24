import { Request, Response } from "express"
import { service } from "./friend.service";

export const controller = {
    sendRequest: async (req: Request, res: Response) => {
        const fromUser = +req.params.id;
        const toUser = +req.body.toId;

        const result = await service.sendRequest(fromUser, toUser);
        res.json(result);
    },
    getAllFriends: async (req: Request, res: Response) => {
        const userId = +req.params.id;
        const result = await service.getAllFriends(userId);

        res.json(result);
    }, 
    acceptRequest: async (req: Request, res: Response) => {
        const requestId = +req.params.id;
        const result = await service.acceptRequest(requestId);

        res.json(result);
    },
    rejectRequest: async (req: Request, res: Response) => {
        const requestId = +req.params.id;
        const result = await service.rejectRequest(requestId);

        res.json(result);
    },
    getAllRequests: async (req: Request, res: Response) => {
        const userId = +req.params.id;
        const result = await service.getAllRequests(userId);

        res.json(result);
    },
    deleteFriend: async (req: Request, res: Response) => {
        const fromId = +req.params.id;
        const toId = +req.body.id;

        const result = await service.deleteFriend(fromId, toId);
        res.json(result);
    }
}