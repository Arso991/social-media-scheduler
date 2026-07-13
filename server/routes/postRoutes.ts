import { Router } from "express";
import {
  generatePost,
  getGenerations,
  getPosts,
  schedulePost,
} from "../controllers/postController.js";
import { upload } from "../config/multer.js";

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.get("/generations", getGenerations);
postRouter.post("/", upload.single("media"), schedulePost);
postRouter.post("/generate", generatePost);

export default postRouter;
