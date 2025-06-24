import { NextFunction } from "express";
import { Request, Response } from "express";
import { service } from "./chat.service";

export const controller = {
	getChats: async (req: Request, res: Response, next: NextFunction) => {
		const userId = +res.locals.userId;
		const result = await service.getAllChats(userId);
		if (result.status == "error") {
			next(result);
			return;
		}
		res.json(result);
	},
	createChat: async (req: Request, res: Response, next: NextFunction) => {
		const data: { membersIds: number[], groupInfo: {name: string, avatar?: string} } = req.body;
		const result = await service.createChat(data.membersIds, data.groupInfo);
		if (result.status == "error") {
			next(result);
			return;
		}
		res.json(result);
	},
};
