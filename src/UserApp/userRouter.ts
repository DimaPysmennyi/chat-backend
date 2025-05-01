import { Router } from "express";
import userController from './userController'
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.authUser);
router.get('/me', authTokenMiddleware)

export default router;