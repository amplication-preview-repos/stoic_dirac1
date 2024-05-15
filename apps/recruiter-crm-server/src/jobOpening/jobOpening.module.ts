import { Module } from "@nestjs/common";
import { JobOpeningModuleBase } from "./base/jobOpening.module.base";
import { JobOpeningService } from "./jobOpening.service";
import { JobOpeningController } from "./jobOpening.controller";
import { JobOpeningResolver } from "./jobOpening.resolver";

@Module({
  imports: [JobOpeningModuleBase],
  controllers: [JobOpeningController],
  providers: [JobOpeningService, JobOpeningResolver],
  exports: [JobOpeningService],
})
export class JobOpeningModule {}
