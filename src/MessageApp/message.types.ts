import { Prisma } from "../generated";

export type Message = Prisma.ChatMessageGetPayload<{}>

interface NewMessagePayload {
    message: CreateMessage
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

export type CreateMessage = Prisma.ChatMessageUncheckedCreateInput;
