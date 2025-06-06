import { client } from "../client/client";
import { CreateAlbum, CreateUser, UpdateUser, User } from "./user.types";
import { handleError } from "../tools/handleError";

async function findUserByEmail(email: string) {
	try {
		const user = client.user.findUnique({
			where: {
				email: email,
			},
			include: {
				posts: true,
				albums: true,
				friends: true,
			},
		});
		return user;
	} catch (error) {
		handleError(error);
	}
}

async function registerUser(data: CreateUser) {
	try {
		const user = client.user.create({
			data: data,
		});
		return user;
	} catch (error) {
		handleError(error);
	}
}

async function updateUser(id: number, data: UpdateUser) {
	try {
		const user = client.user.update({
			where: { id },
			data: data,
			select: {
				id: true,
				username: true,
				email: true,
				firstname: true,
				lastname: true,
				posts: true,
				albums: true,
				friends: true,
				image: true,
				birthdate: true,
			},
		});
		return user;
	} catch (error) {
		handleError(error);
	}
}

async function getAllFriends(id: number) {
	try {
		const friends = await client.friend.findMany({});
        // console.log(id);
		const filteredFriends = friends.filter((friend) => {
            // console.log(friend);
			return id === friend.friendOfId;
		});

        // console.log(filteredFriends)

		const users: User[] = [];
		for (let friend of filteredFriends) {
			let user = await client.user.findUnique({
				where: {
					id: friend.friendUserId,
				},
				select: {
					id: true,
					username: true,
					email: true,
					firstname: true,
					lastname: true,
					posts: true,
					albums: true,
					friends: true,
					image: true,
					birthdate: true,
				},
			});
            console.log(user);
            if (user){
                users.push(user);
            }
		}

		return users;
	} catch (error) {
		handleError(error);
	}
}

async function getUserAlbums(id: number) {
	try {
		const users = client.user.findUnique({
			where: { id },
			select: {
				albums: true,
			},
		});
		return users;
	} catch (error) {
		handleError(error);
	}
}

async function addFriend(id: number, friendId: number) {
	try {
		const friend = client.friend.create({
			data: {
				friendOfId: id,
				friendUserId: friendId,
			},
		});
		return friend;
	} catch (error) {
		handleError(error);
	}
}

async function createAlbum(data: CreateAlbum) {
	try {
		const album = client.userAlbum.create({
			data,
		});
		return album;
	} catch (error) {
		handleError(error);
	}
}

async function getAllUsers() {
	try {
		const users = client.user.findMany({
			select: {
				id: true,
				username: true,
				email: true,
				firstname: true,
				lastname: true,
				posts: true,
				friends: true,
				albums: true,
				image: true,
				birthdate: true,
			},
		});

		return users;
	} catch (error) {
		handleError(error);
	}
}

async function getUserById(id: number) {
	try {
		const user = client.user.findUnique({
			where: {
				id: id,
			},
			select: {
				id: true,
				username: true,
				email: true,
				firstname: true,
				lastname: true,
				posts: true,
				friends: true,
				albums: true,
				image: true,
				birthdate: true,
			},
		});
		return user;
	} catch (error) {
		handleError(error);
	}
}

async function getFriendById(id: number, friendId: number) {
	try {
		const friend = client.friend.findFirst({
			where: {
				friendOfId: id,
				friendUserId: friendId,
			},
		});
		return friend;
	} catch (error) {
		handleError(error);
	}
}

async function deleteFriend(id: number, friendId: number) {
	try {
		const friendEntry = await getFriendById(id, friendId);
		if (friendEntry) {
			const friend = client.friend.delete({
				where: {
					id: friendEntry.id,
				},
			});
			return friend;
		}
		throw "Friend not deleted";
	} catch (error) {
		handleError(error);
	}
}

export const repository = {
	findUserByEmail,
	registerUser,
	getUserAlbums,
	getAllFriends,
	addFriend,
	createAlbum,
	getAllUsers,
	updateUser,
	getUserById,
	deleteFriend,
};
