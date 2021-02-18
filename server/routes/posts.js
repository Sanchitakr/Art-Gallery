import express from 'express';
import {getPosts,createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';


const router = express.Router();

//not reached through localhost:5000/ 
//uses localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
//:id is to make it dynamic
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;