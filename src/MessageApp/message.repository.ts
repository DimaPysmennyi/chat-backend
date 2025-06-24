import { client } from "../client/client";
import { CreateMessage } from "./message.types";

export const repository = {
    createMessage: async (data: CreateMessage) => {
        return client.chatMessage.create({
            data,
        })
    }
}