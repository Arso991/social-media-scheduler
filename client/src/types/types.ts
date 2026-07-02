export type Account = {
  _id: string;
  platform: string;
  handle: string;
  status: "connected" | string;
};

export type Activity = {
  description: string;
  createdAt: string;
};

export type Post = {
  _id: string;
  user: string;
  prompt: string;
  platforms?: string[] | [];
  mediaType?: string | null;
  mediaUrl: string;
  tone: string;
  scheduledFor?: Date | null;
  createdAt: Date | string;
  updatedAt: Date | string;
  content: string;
  status?: "scheduled" | "published" | string | null;
};
