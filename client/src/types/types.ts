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
  status: "scheduled" | "published" | string;
};
