import { CreateUser, IError, ISuccess, User } from "./types";
import { compare, hash } from 'bcrypt';
import userRepository from "./userRepository";
import { sign } from "jsonwebtoken";
import { TOKEN } from '../config/token'

async function registerUser(data: CreateUser): Promise <IError | ISuccess<string>>{
    const user = await userRepository.findUserByEmail(data.email);
    if (user){
        return {status: "error", message: "User already exists"}
    }

    const hashedPassword = await hash(data.password, 10);

    const registeredUser = await userRepository.registerUser({...data, password: hashedPassword});

    if (!registeredUser){
        return {status: "error", message: "Registration failed"}
    }

    const token = sign({id: registeredUser.id}, TOKEN, {expiresIn: '1d'});
    return {status: "success", data: token}
}

async function authUser(email: string, password: string): Promise <IError | ISuccess<string>>{
    const user = await userRepository.findUserByEmail(email);
    if (!user){
        return {status: "error", message: "User does not exist"}
    }

    const match = await compare(password, user.password);
    if (!match){
        return {status: "error", message: "Passwords do not match"}
    }

    const token = sign({id: user.id}, TOKEN, {expiresIn: '1d'});
    return {status: "success", data: token};
}

async function getUserById(id: number): Promise <IError | ISuccess<User>>{
    const user = await userRepository.getUserById(id);
    if (!user){
        return {status: "error", message: "User not found"}
    }
    return {status: "success", data: user};
}

const userService = {
    registerUser: registerUser,
    authUser: authUser,
    getUserById: getUserById
}

export default userService;