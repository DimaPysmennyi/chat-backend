import { Prisma } from "../generated";

export type Message = Prisma.ChatMessageGetPayload<{
    select: {
        attachedImage: true
    }
}>

interface NewMessagePayload {
    message: Message,
};

interface SendMessagePayload {
    message: CreateMessage;
}



export interface IMessageServerEvents{
    newMessage: (data: NewMessagePayload) => void;
}

export interface IMessageClientEvents{
    sendMessage: (data: SendMessagePayload) => void;
}

export type CreateMessage = {
    content: string,
    attachedImage?: {
        filename: string,
    },
    authorId: number,
    chatGroupId: number
};
