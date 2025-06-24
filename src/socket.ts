import { Server as HTTPServer } from "http";
import { Server as SocketServer } from "socket.io";
import {
	AppClientEvents,
	AppServerEvents,
	AuthenticatedSocket,
	SocketData,
} from "./types/socket";
import { chatSocketController } from "./ChatApp/chat.socket.controller";
import { messageSocketController } from "./MessageApp/message.socket.controller";

export function initSocketServer(httpServer: HTTPServer) {
	const ioServer = new SocketServer<
		AppClientEvents,
		AppServerEvents,
		{},
		SocketData
	>(httpServer);

    ioServer.on("connection", (socket: AuthenticatedSocket) => {
		console.log(socket.id);
		chatSocketController.registerChatControllers(socket);
        messageSocketController.registerMessageControllers(socket);
	});
}