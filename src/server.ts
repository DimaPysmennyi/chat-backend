import express from "express";
import cors from 'cors';
import userRouter from './UserApp/user.router';
import postRouter from './PostApp/post.router';
import { friendRouter } from "./FriendshipApp/friend.router";
import { createServer } from "http";
import { join } from "path";
import { initSocketServer } from "./socket";
import { chatRouter } from "./ChatApp/chat.router";

const app = express()
const httpServer = createServer(app);

initSocketServer(httpServer);

const HOST = "192.168.178.39";
const PORT = 8000;

app.set('json spaces', 2);
app.use(express.json({limit: "20mb"}));

app.use(cors());
app.use("/media/", express.static((join(__dirname, '../', '/media'))))

app.use('/api/users/', userRouter);
app.use('/api/posts/', postRouter);
app.use('/api/friends/', friendRouter);
app.use('/api/chats/', chatRouter);


httpServer.listen(PORT, HOST, () => {
    console.log("running");
})
