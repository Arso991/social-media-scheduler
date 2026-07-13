import { Router } from "express";
import { getActivities } from "../controllers/activityLogController.js";

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);

export default activitiesRouter;
