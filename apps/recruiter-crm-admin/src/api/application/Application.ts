import { Candidate } from "../candidate/Candidate";
import { JobOpening } from "../jobOpening/JobOpening";

export type Application = {
  candidate?: Candidate | null;
  candidates?: Array<Candidate>;
  createdAt: Date;
  id: string;
  jobOpening?: JobOpening | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
