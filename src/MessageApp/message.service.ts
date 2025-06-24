import { repository } from "./message.repository";
import { CreateMessage } from "./message.types";

export const service = {
    createMessage: async (data: CreateMessage) => {
        const message = await repository.createMessage(data);
        if (!message){
            return {status: "error", message: "Could not create message"}
        }
        return {status: "success", data: message}
    }
}