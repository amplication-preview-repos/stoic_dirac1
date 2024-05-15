export type User = {
  createdAt: Date;
  id: string;
  password: string | null;
  roles?: Array<"Option1">;
  updatedAt: Date;
  username: string | null;
};
