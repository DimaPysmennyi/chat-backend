import { client } from "../client/client";
import { handleError } from "../tools/handleError";

export const repository = {
	getRequestBetweenUsers: async (fromUser: number, toUser: number) => {
		return client.friendship.findFirst({
			where: {
				OR: [
					{ profile1Id: fromUser, profile2Id: toUser },
					{ profile1Id: toUser, profile2Id: fromUser },
				],
			},
		});
	},
	getAllFriends: async (userId: number) => {
		return await client.user.findMany({
			where: {
				OR: [
					{
						sentRequests: {
							some: {
								profile1Id: userId,
								accepted: true,
							},
						},
					},
					{
						sentRequests: {
							some: {
								profile2Id: userId,
								accepted: true,
							},
						},
					},
				],
			},
			select: {
				id: true,
				firstname: true,
				lastname: true,
				username: true,
				image: true,
			},
		});
	},

	createRequest: async (fromId: number, toId: number) => {
		return client.friendship.create({
			data: {
				profile1Id: fromId,
				profile2Id: toId,
			},
		});
	},

    acceptRequest: async (id: number) => {
        return client.friendship.update({
            where: {id},
            data: {
                accepted: true
            }
        })
    },

    rejectRequest: async (id: number) => {
        return client.friendship.delete({
            where: {id}
        })
    },

    getAllRequests: async (userId: number) => {
        return client.friendship.findMany({
            where: {
                profile2Id: userId,
                accepted: false
            },
            include: {
                profile1: true,
                profile2: true
            }
        })
    },
    
    deleteFriendship: async (fromUser: number, toUser: number) => {
        const request = await repository.getRequestBetweenUsers(fromUser, toUser);
        if (!request){
            throw new Error("No friendship")
        }

        return client.friendship.delete({
            where: {
                id: request.id
            }
        })
    },
};
