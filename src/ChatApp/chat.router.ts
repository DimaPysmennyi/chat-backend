import { Router } from "express";
import { controller } from "./chat.controller";
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";

export const chatRouter = Router();

chatRouter.use(authTokenMiddleware);
chatRouter.get('/all', controller.getChats);
chatRouter.post('/create', controller.createChat)