import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobOpeningServiceBase } from "./base/jobOpening.service.base";

@Injectable()
export class JobOpeningService extends JobOpeningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
