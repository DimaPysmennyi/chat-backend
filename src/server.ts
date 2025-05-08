import express from "express";
import cors from 'cors';
import userRouter from './UserApp/user.router'

const app = express()

const HOST = "192.168.0.51"
const PORT = 8000

app.set('json spaces', 2);
app.use(express.json());

app.use('/api/user/', userRouter)
app.use(cors());


app.listen(PORT, HOST, () => {
    console.log("running");
})
