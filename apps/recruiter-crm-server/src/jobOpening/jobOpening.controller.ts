import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobOpeningService } from "./jobOpening.service";
import { JobOpeningControllerBase } from "./base/jobOpening.controller.base";

@swagger.ApiTags("jobOpenings")
@common.Controller("jobOpenings")
export class JobOpeningController extends JobOpeningControllerBase {
  constructor(protected readonly service: JobOpeningService) {
    super(service);
  }
}
