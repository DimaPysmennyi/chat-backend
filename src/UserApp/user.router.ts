import { Router } from "express";
import { controller } from './user.controller'
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";

const router = Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.authUser);
router.post('/send-code', controller.sendCode);
router.get('/me', authTokenMiddleware, controller.getUserByToken);
router.get('/all', controller.getAllUsers);
router.get('/friends/:id', controller.getAllFriends);
router.get('/albums/:id', controller.getUserAlbums);
router.get('/unique/:id', controller.getUserById);
router.post('/update/:id', controller.updateUser);
router.post('/create-album/:id', controller.createAlbum);
router.post('/add-friend/:id', controller.addFriend);
router.post('/delete-friend/:id', controller.deleteFriend);


export default router;