import { client } from "../client/client";
import { Prisma } from "../generated";
import { CreateUser } from "./user.types";
import { errors, IErrors } from "../config/errorCodes";


async function findUserByEmail(email: string){
    try{
        const user = client.user.findUnique({
            where: {
                email: email,
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function registerUser(data: CreateUser){
    try{
        const user = client.user.create({
            data: data
        })
        return user
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
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
            }
        })
        return user;
    } catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }        
    }
}

export const userRepository = {
    findUserByEmail: findUserByEmail,
    registerUser: registerUser,
    getUserById: getUserById
}
