import { Application } from "../application/Application";
import { JsonValue } from "type-fest";

export type Candidate = {
  application?: Application | null;
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  resume: JsonValue;
  updatedAt: Date;
};
