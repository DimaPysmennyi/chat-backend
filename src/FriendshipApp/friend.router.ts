import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";
import { controller } from "./friend.controller";
import { Router } from "express";

export const friendRouter = Router();
// friendRouter.use(authTokenMiddleware);

friendRouter.post("/send-request/:id", controller.sendRequest);
friendRouter.get("/all/:id", controller.getAllFriends);
friendRouter.get("/accept-request/:id", controller.acceptRequest);
friendRouter.get("/reject-request/:id", controller.rejectRequest);
friendRouter.get("/get-all-requests/:id", controller.getAllRequests);
friendRouter.post("/delete-friend/:id", controller.deleteFriend);