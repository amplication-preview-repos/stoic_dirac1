/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  JobOpening as PrismaJobOpening,
  Application as PrismaApplication,
  Client as PrismaClient,
} from "@prisma/client";

export class JobOpeningServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.JobOpeningCountArgs, "select">
  ): Promise<number> {
    return this.prisma.jobOpening.count(args);
  }

  async jobOpenings<T extends Prisma.JobOpeningFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOpeningFindManyArgs>
  ): Promise<PrismaJobOpening[]> {
    return this.prisma.jobOpening.findMany<Prisma.JobOpeningFindManyArgs>(args);
  }
  async jobOpening<T extends Prisma.JobOpeningFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOpeningFindUniqueArgs>
  ): Promise<PrismaJobOpening | null> {
    return this.prisma.jobOpening.findUnique(args);
  }
  async createJobOpening<T extends Prisma.JobOpeningCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOpeningCreateArgs>
  ): Promise<PrismaJobOpening> {
    return this.prisma.jobOpening.create<T>(args);
  }
  async updateJobOpening<T extends Prisma.JobOpeningUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOpeningUpdateArgs>
  ): Promise<PrismaJobOpening> {
    return this.prisma.jobOpening.update<T>(args);
  }
  async deleteJobOpening<T extends Prisma.JobOpeningDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOpeningDeleteArgs>
  ): Promise<PrismaJobOpening> {
    return this.prisma.jobOpening.delete(args);
  }

  async findApplications(
    parentId: string,
    args: Prisma.ApplicationFindManyArgs
  ): Promise<PrismaApplication[]> {
    return this.prisma.jobOpening
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .applications(args);
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.jobOpening
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }
}