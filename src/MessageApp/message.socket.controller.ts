import { uploadImage } from "../tools/uploadImage";
import { AuthenticatedSocket } from "../types/socket";
import { service } from "./message.service";
import { CreateMessage } from "./message.types";

export const messageSocketController = {
    registerMessageControllers: (socket: AuthenticatedSocket) => {
        socket.on("sendMessage", (data) => {
            console.log("sent")
            messageSocketController.newMessage(socket, data.message)
        })
    },
    newMessage: async (socket: AuthenticatedSocket, data: CreateMessage) => {
        try{
            if (data.attachedImage){
                const {fileName} = await uploadImage(data.attachedImage.filename)
                var result = await service.createMessage({...data, attachedImage: {filename: fileName}});
            } else{
                var result = await service.createMessage(data);
            }
            console.log(result.data);
            console.log(data.chatGroupId);
            if (result.data){
                socket.to(`chat_${data.chatGroupId}`).emit("newMessage", {message: result.data});
            }

        } catch(error){
            console.error(error);
            return;
        }
    }
}