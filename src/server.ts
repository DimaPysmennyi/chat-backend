import express from "express";
import cors from 'cors';
import userRouter from './UserApp/userRouter'

const app = express()

const HOST = "localhost"
const PORT = 8000

app.set('json spaces', 2);
app.use(express.json());

app.use('/api/user/', userRouter)
app.use(cors());


app.listen(PORT, HOST, () => {
    console.log("running");
})
