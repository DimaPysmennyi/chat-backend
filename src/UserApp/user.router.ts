import { Router } from "express";
import { userController } from './user.controller'
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.authUser);
router.get('/me', authTokenMiddleware, userController.getUserByToken);
router.post('/send-code', userController.sendCode);

export default router;