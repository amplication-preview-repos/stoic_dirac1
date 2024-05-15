import * as graphql from "@nestjs/graphql";
import { JobOpeningResolverBase } from "./base/jobOpening.resolver.base";
import { JobOpening } from "./base/JobOpening";
import { JobOpeningService } from "./jobOpening.service";

@graphql.Resolver(() => JobOpening)
export class JobOpeningResolver extends JobOpeningResolverBase {
  constructor(protected readonly service: JobOpeningService) {
    super(service);
  }
}
