import { JobOpening } from "../jobOpening/JobOpening";

export type Client = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  jobOpenings?: Array<JobOpening>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
