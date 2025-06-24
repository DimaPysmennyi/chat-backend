import { client } from "../client/client";
import { CreateChat } from "./chat.types";

export const repository = {
	createChat: async (membersIds: number[], data?: {name: string, avatar?: string}) => {
        const connectedUsers = []
        for (let id of membersIds){
            connectedUsers.push({
                user: {
                    connect: {
                        id: id
                    }
                }
            })
        }
        let isPersonal = false;
        if (membersIds.length === 2){
            isPersonal = true;
        }
		return await client.chatGroup.create({
			data: {
                name: data?.name,
                avatar: data?.avatar,
                isPersonalChat: isPersonal,
                adminId: membersIds[0],
				members: {
					create: connectedUsers,
				},
			},
            include: {
                members: true,
                messages: true
            }
		});
	},
    getChat: async (id: number) => {
        return client.chatGroup.findUniqueOrThrow({
            where: {
                id: id
            },
            include: {
                members: true,
                messages: true
            }
        })
    },
    getAllChats: async (userId: number) => {
        return client.chatGroup.findFirstOrThrow({
            where: {
                members: {
                    some: {userId}
                }
            }
        })
    }
};
