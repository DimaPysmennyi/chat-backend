import { Router } from "express";
import { controller } from './user.controller'
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";

const router = Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.authUser);
router.post('/update/:id', controller.updateUser);
router.post('/send-code', controller.sendCode);
router.get('/me', authTokenMiddleware, controller.getUserByToken);
router.get('/unique/:id', controller.getUserById);
router.get('/all', controller.getAllUsers);

export default router;