import express from "express";
import cors from 'cors';
import userRouter from './UserApp/user.router';
import postRouter from './PostApp/post.router';

const app = express()

const HOST = "192.168.0.51";
const PORT = 8000;

app.set('json spaces', 2);
app.use(express.json());

app.use('/api/users/', userRouter);
app.use('/api/posts/', postRouter);
app.use(cors());


app.listen(PORT, HOST, () => {
    console.log("running");
})
