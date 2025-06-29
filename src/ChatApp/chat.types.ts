import { Prisma } from "../generated";
import { Result } from "../types/types";

export type Chat = Prisma.ChatGroupGetPayload<{
    include: {
        members: {
			select: {
				user: true
			}
		},
        messages: true,
    }
}>;
export type CreateChat = Prisma.ChatGroupCreateWithoutMembersInput & {membersIds: number[]};


export interface IChatServerEvents {
	chatUpdate: (data: IChatUpdatePayload) => void;
}

export interface IChatClientEvents {
	joinChat: (data: IJoinChatPayload, callback: JoinChatCallback) => void;
	leaveChat: (data: ILeaveChatPayload) => void;
}

export interface IJoinChatPayload {
	chatId: number;
}
export interface ILeaveChatPayload {
	chatId: number;
}
export interface IChatUpdatePayload {
	chatId: number;
}

export type JoinChatCallback = (
	response: Result<Chat>
) => void;