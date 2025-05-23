import { Router } from "express";
import { controller } from "./post.controller";

const router = Router();

router.get('/all', controller.getAllPosts);
router.get('/:id', controller.getPostById);
router.get('/users/:id', controller.getPostsByUserId);
router.post('/create', controller.createPost);
router.post('/update/:id', controller.updatePost);
router.get('/delete/:id', controller.deletePost);

export default router;