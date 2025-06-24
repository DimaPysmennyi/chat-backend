import { client } from "../client/client";
import {
	CreateAlbum,
	CreateUser,
	UpdateAlbum,
	UpdateUser,
	User,
} from "./user.types";
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
				image: true,
				birthdate: true,
			},
		});
		return user;
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

async function createAlbum(data: CreateAlbum) {
	try {
		const album = client.album.create({
			data: data,
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

async function updateAlbum(id: number, data: UpdateAlbum) {
	const {
		images: [],
		...otherData
	} = data;

	try {
		const album = await client.album.update({
			where: { id },
			data: {...otherData},
		});

		// if (images.length > 0){
        //     await client.image.createMany({
        //         data: images.map((image) => ({
        //             filename: image,
        //             albumId: album.id
        //         }))
        //     })
        // }

        const albumWithImages = await client.album.findUnique({
            where: {id: album.id},
            include: {images: true}
        })
		return albumWithImages;
	} catch (error) {
		handleError(error);
	}
}

export const repository = {
	findUserByEmail,
	registerUser,
	getUserAlbums,
	createAlbum,
	getAllUsers,
	updateUser,
	getUserById,
	updateAlbum,
};
