import { Application } from "../application/Application";
import { Client } from "../client/Client";

export type JobOpening = {
  applications?: Array<Application>;
  client?: Client | null;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
