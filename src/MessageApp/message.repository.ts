import { client } from "../client/client";
import { CreateMessage } from "./message.types";

export const repository = {
    createMessage: async (data: CreateMessage) => {
        return client.chatMessage.create({
            data: {
                content: data.content,
                attachedImage: data.attachedImage ? {
                    create: [
                        {
                            filename: data.attachedImage.filename
                        }
                    ]
                } : undefined,
                authorId: data.authorId,
                chatGroupId: data.chatGroupId
            },
            include: {
                attachedImage: true
            }
        })
    }
}