import express from "express";

import { getPosts, createPost } from "../Controller/PostsController.js";
import auth from "../../middleware/Auth.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/create", auth, createPost);

export default router;

//README.md