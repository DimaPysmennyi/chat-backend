import { client } from "../client/client";
import { repository } from "./friend.repository";

export const service = {
	sendRequest: async (fromUser: number, toUser: number) => {
        console.log(fromUser, toUser)
		if (fromUser === toUser) {
			return { status: "error", message: "Request impossible" };
		}

		const request = await repository.getRequestBetweenUsers(
			fromUser,
			toUser
		);
		if (request) {
			return { status: "error", message: "Request impossible" };
		}

		const result = await repository.createRequest(fromUser, toUser);
		if (!result) {
			return { status: "error", message: "Did not send request" };
		}

		return { status: "success", data: result };
	},
    
    getAllFriends: async (userId: number) => {
        const result = await repository.getAllFriends(userId);
        if (!result){
            return {status: "error", message: "Could not get all friends"};
        }
        return {status: "success", data: result}
    },

	acceptRequest: async (requestId: number) => {
		const result = await repository.acceptRequest(requestId);
		if (!result) {
			return { status: "error", message: "Did not accept request" };
		}

		return { status: "success", data: result };
	},

	rejectRequest: async (requestId: number) => {
		const result = await repository.rejectRequest(requestId);
		if (!result) {
			return { status: "error", message: "Did not reject request" };
		}

		return { status: "success", data: result };
	},

	getAllRequests: async (userId: number) => {
		const result = await repository.getAllRequests(userId);
		if (!result) {
			return { status: "error", message: "Did not get requests" };
		}

		return { status: "success", data: result };
	},

	deleteFriend: async (fromId: number, toId: number) => {
		const result = await repository.deleteFriendship(fromId, toId);
		if (!result) {
			return { status: "error", message: "Did not delete friend" };
		}

		return { status: "success", data: result };
	},
};
