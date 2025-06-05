import { client } from "../client/client";
import { Prisma } from "../generated";
import { CreateUser, UpdateUser } from "./user.types";
import { errors, IErrors } from "../config/errorCodes";
import { handleError } from "../tools/handleError";


async function findUserByEmail(email: string){
    try{
        const user = client.user.findUnique({
            where: {
                email: email,
            },
            include: {
                posts: true,
                albums: true,
                friends: true,
            }
        })
        return user;
    } catch(error){
        handleError(error);
    }
}

async function registerUser(data: CreateUser){
    try{
        const user = client.user.create({
            data: data
        })
        return user
    } catch(error){
        handleError(error);
    }
}

async function updateUser(id: number, data: UpdateUser){
    try{
        const user = client.user.update({
            where: {id},
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
                birthdate: true
            }
        })
        return user
    } catch(error){
        handleError(error);
    }
}

async function getAllUsers(){
    try{
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
                birthdate: true
            }
        });

        return users;
    } catch(error){
        handleError(error);
    }
}

async function getUserById(id: number){
    try{
        const user = client.user.findUnique({
            where: {
                id: id
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
                birthdate: true
            }
        })
        return user;
    } catch (error){
        handleError(error);     
    }
}

export const repository = {
    findUserByEmail,
    registerUser,
    getAllUsers,
    updateUser,
    getUserById
}
