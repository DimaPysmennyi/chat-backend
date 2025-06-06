import { Album, CreateAlbum, CreateFriend, CreateUser, Friend, UpdateUser, User } from "./user.types";
import { compare, hash } from 'bcrypt';
import { repository } from "./user.repository";
import { sign } from "jsonwebtoken";
import { TOKEN } from '../config/token';
import { createTransport } from 'nodemailer';
import { IError, ISuccess } from "../types/types";

const givenCodes = new Map<string, {code: string, expiresAt: number}>()

async function registerUser(data: CreateUser): Promise <IError | ISuccess<string>>{
    const user = await repository.findUserByEmail(data.email);
    if (user){
        return {status: "error", message: "User already exists"}
    }

    const hashedPassword = await hash(data.password, 10);

    const registeredUser = await repository.registerUser({...data, password: hashedPassword});

    if (!registeredUser){
        return {status: "error", message: "Registration failed"}
    }

    const token = sign({id: registeredUser.id}, TOKEN, {expiresIn: '1d'});
    return {status: "success", data: token}
}

async function authUser(email: string, password: string): Promise <IError | ISuccess<string>>{
    const user = await repository.findUserByEmail(email);
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

async function getUserAlbums(id: number): Promise <IError | ISuccess<Album[]>>{
    const result = await repository.getUserAlbums(id);
    if (!result){
        return {status: "error", message: "Albums not found"}
    }
    return {status: "success", data: result.albums}
}

async function getAllFriends(id: number): Promise <IError | ISuccess<User[]>>{
    // console.log(id);
    const result = await repository.getAllFriends(id);
    if (!result){
        return {status: "error", message: "Friends Not Found"}
    }
    return {status: "success", data: result}
}

async function createAlbum(data: CreateAlbum): Promise <IError | ISuccess<Album>>{
    const album = await repository.createAlbum(data);
    if (!album){
        return {status: "error", message: "Could not create album"}
    }
    return {status: "success", data: album}
}

async function addFriend(id: number, friendId: number): Promise <IError | ISuccess<Friend>>{
    const friend = await repository.addFriend(id, friendId);
    if (!friend){
        return {status: "error", message: "Could not add friend"}
    }
    return {status: "success", data: friend}
}

async function deleteFriend(id: number, friendId: number): Promise <IError | ISuccess<Friend>>{
    const friend = await repository.deleteFriend(id, friendId);
    if (!friend){
        return {status: "error", message: "Could not delete friend"}
    }
    return {status: "success", data: friend}
}

async function getUserById(id: number): Promise <IError | ISuccess<User>>{
    const user = await repository.getUserById(id);
    if (!user){
        return {status: "error", message: "User not found"}
    }
    return {status: "success", data: user};
}

async function getAllUsers(): Promise <IError | ISuccess<User[]>>{
    const users = await repository.getAllUsers();
    if (!users){
        return {status: "error", message: "Users Not Found"}
    }
    return {status: "success", data: users}
}

async function updateUser(id: number, data: UpdateUser): Promise <IError | ISuccess<User>>{
    const user = await repository.updateUser(id, data);
    if (!user){
        return {status: "error", message: "User not found"}
    }
    return {status: "success", data: user};
}

async function sendCode(email: string): Promise <IError | ISuccess<string>> {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000;

    givenCodes.set(email, {code: randomCode, expiresAt: expiresAt});
    console.log(givenCodes);

    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: 'chatverifybot@gmail.com',
            pass: 'kjcj dowq vvyn demq'
        }
    })

    const emailOptions = {
        from: 'chatverifybot@gmail.com',
        to: email,
        subject: 'Verification Code',
        text: `Your verification code is: ${randomCode}`
    }

    try{
        const result = await transporter.sendMail(emailOptions);
        console.log('success')
        return {status: "success", data: result.response}
    } catch(error){
        console.error(error);
        return {status: "error", message: 'E-mail sending error'}
    }
}

function verifyCode(email: string, code: string){
    const givenData = givenCodes.get(email);
    if (!givenData){
        return {status: "error", message: 'Code not found'}
    }

    if (Date.now() > givenData.expiresAt){
        givenCodes.delete(email);
        return {status: "error", message: 'Code expired'}
    }

    if (code !== givenData.code)

    givenCodes.delete(email);
    return {status: "success", data: givenData.code}
}

function saveCode(email: string, code: string){
    const expiresAt = Date.now() + 10 * 60 * 1000;
    givenCodes.set(email, {code, expiresAt})
}


export const service = {
    registerUser,
    authUser,
    getUserById,
    getAllUsers,
    updateUser,
    sendCode,
    verifyCode,
    saveCode,
    getUserAlbums,
    createAlbum,
    getAllFriends,
    addFriend,
    deleteFriend
}
