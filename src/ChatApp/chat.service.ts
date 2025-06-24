import { repository } from "./chat.repository";
import { CreateChat } from "./chat.types";

export const service = {
	joinChat: async (id: number) => {
		const chat = await repository.getChat(id);
		if (!chat) {
			return { status: "error", message: "Did not join chat" };
		}
		return { status: "success", data: chat };
	},
	getAllChats: async (userId: number) => {
		const chats = await repository.getAllChats(userId);
		if (!chats) {
			return { status: "error", message: "Did not get all chats" };
		}
		return { status: "success", data: chats };
	},
	createChat: async (membersIds: number[], data?: {name: string, avatar?: string}) => {
		const chat = await repository.createChat(membersIds, data);
		if (!chat) {
			return { status: "error", message: "Did not create chat" };
		}
		return { status: "success", data: chat };
	},
};
