import { Router } from "express";
import {
  generateAuthUrl,
  syncAccount,
} from "../controllers/socialAuthController.js";

const socialAuthRouter = Router();

socialAuthRouter.get("/:platform/url", generateAuthUrl);
socialAuthRouter.get("/sync", syncAccount);

export default socialAuthRouter;
