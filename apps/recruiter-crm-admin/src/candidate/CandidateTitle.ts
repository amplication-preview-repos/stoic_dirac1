import { Candidate as TCandidate } from "../api/candidate/Candidate";

export const CANDIDATE_TITLE_FIELD = "firstName";

export const CandidateTitle = (record: TCandidate): string => {
  return record.firstName?.toString() || String(record.id);
};
