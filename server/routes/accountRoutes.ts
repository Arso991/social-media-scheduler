import { Router } from "express";
import {
  addAccount,
  disconnectAccount,
  getAccounts,
} from "../controllers/accountController.js";

const accountRouter = Router();

accountRouter.get("/", getAccounts);
accountRouter.post("/", addAccount);
accountRouter.delete("/:id", disconnectAccount);

export default accountRouter;
