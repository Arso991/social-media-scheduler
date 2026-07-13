import { Request, Response } from "express";
import { ActivityLog } from "../models/ActivityLog.js";

// Get activities
// GET /api/activities
export const getActivities = async (
  req: Request & { user?: any },
  res: Response,
): Promise<void> => {
  try {
    const activities = await ActivityLog.find({ user: req.user._id })
      .sort({
        createdAt: -1,
      })
      .limit(10)
      .populate("relatedPost", "content");
    res.json(activities);
  } catch (error: any) {
    res.status(500).json({ message: error?.message || "Server error" });
  }
};
