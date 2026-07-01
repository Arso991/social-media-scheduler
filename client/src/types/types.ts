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
  platforms: string[];
  mediaType: string;
  scheduledFor: Date;
  updatedAt: Date;
  content: string;
  status: "scheduled" | "published" | string;
};
