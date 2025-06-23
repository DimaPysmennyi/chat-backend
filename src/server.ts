import express from "express";
import cors from 'cors';
import userRouter from './UserApp/user.router';
import postRouter from './PostApp/post.router';
import { join } from "path";

const app = express()

const HOST = "192.168.178.39";
const PORT = 8000;

app.set('json spaces', 2);
app.use(express.json());

app.use(cors());
app.use("/media/", express.static((join(__dirname, '../', '/media'))))

app.use('/api/users/', userRouter);
app.use('/api/posts/', postRouter);


app.listen(PORT, HOST, () => {
    console.log("running");
})
