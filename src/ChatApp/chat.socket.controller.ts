import { AuthenticatedSocket } from "../types/socket";
import { service } from "./chat.service";
import {
	IJoinChatPayload,
	ILeaveChatPayload,
	JoinChatCallback,
} from "./chat.types";

export const chatSocketController = {
	registerChatControllers: (socket: AuthenticatedSocket) => {
		socket.on("joinChat", (data, ack) => {
			chatSocketController.joinChat(socket, data, ack);
		});
		socket.on("leaveChat", (data) => {
			chatSocketController.leaveChat(socket, data);
		});
	},

	joinChat: async (
		socket: AuthenticatedSocket,
		data: IJoinChatPayload,
		ack: JoinChatCallback
	) => {
		const chatRoomName = `chat_${data.chatId}`;
		const result = await service.joinChat(data.chatId);
		socket.join(chatRoomName);
		if (typeof ack === "function") ack(result);
	},

	leaveChat: (socket: AuthenticatedSocket, data: ILeaveChatPayload) => {
		const chatRoomName = `chat_${data.chatId}`;
		socket.leave(chatRoomName);
	},
};
