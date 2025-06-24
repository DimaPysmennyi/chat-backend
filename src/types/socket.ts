import { Socket } from "socket.io";
import { IChatClientEvents, IChatServerEvents, IJoinChatPayload } from "../ChatApp/chat.types";
import { IMessageClientEvents, IMessageServerEvents } from "../MessageApp/message.types";

export type AppServerEvents = IChatServerEvents & IMessageServerEvents;
export type AppClientEvents = IChatClientEvents & IMessageClientEvents;

export interface SocketData{
    id: number
}

export type AuthenticatedSocket = Socket<AppClientEvents, AppServerEvents, {}, SocketData>