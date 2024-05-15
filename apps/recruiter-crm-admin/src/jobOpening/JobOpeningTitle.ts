import { JobOpening as TJobOpening } from "../api/jobOpening/JobOpening";

export const JOBOPENING_TITLE_FIELD = "title";

export const JobOpeningTitle = (record: TJobOpening): string => {
  return record.title?.toString() || String(record.id);
};
