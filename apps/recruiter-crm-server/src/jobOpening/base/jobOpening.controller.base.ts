/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { JobOpeningService } from "../jobOpening.service";
import { JobOpeningCreateInput } from "./JobOpeningCreateInput";
import { JobOpening } from "./JobOpening";
import { JobOpeningFindManyArgs } from "./JobOpeningFindManyArgs";
import { JobOpeningWhereUniqueInput } from "./JobOpeningWhereUniqueInput";
import { JobOpeningUpdateInput } from "./JobOpeningUpdateInput";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { ApplicationWhereUniqueInput } from "../../application/base/ApplicationWhereUniqueInput";

export class JobOpeningControllerBase {
  constructor(protected readonly service: JobOpeningService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobOpening })
  async createJobOpening(
    @common.Body() data: JobOpeningCreateInput
  ): Promise<JobOpening> {
    return await this.service.createJobOpening({
      data: {
        ...data,

        client: data.client
          ? {
              connect: data.client,
            }
          : undefined,
      },
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [JobOpening] })
  @ApiNestedQuery(JobOpeningFindManyArgs)
  async jobOpenings(@common.Req() request: Request): Promise<JobOpening[]> {
    const args = plainToClass(JobOpeningFindManyArgs, request.query);
    return this.service.jobOpenings({
      ...args,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobOpening })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async jobOpening(
    @common.Param() params: JobOpeningWhereUniqueInput
  ): Promise<JobOpening | null> {
    const result = await this.service.jobOpening({
      where: params,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobOpening })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateJobOpening(
    @common.Param() params: JobOpeningWhereUniqueInput,
    @common.Body() data: JobOpeningUpdateInput
  ): Promise<JobOpening | null> {
    try {
      return await this.service.updateJobOpening({
        where: params,
        data: {
          ...data,

          client: data.client
            ? {
                connect: data.client,
              }
            : undefined,
        },
        select: {
          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobOpening })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteJobOpening(
    @common.Param() params: JobOpeningWhereUniqueInput
  ): Promise<JobOpening | null> {
    try {
      return await this.service.deleteJobOpening({
        where: params,
        select: {
          client: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/applications")
  @ApiNestedQuery(ApplicationFindManyArgs)
  async findApplications(
    @common.Req() request: Request,
    @common.Param() params: JobOpeningWhereUniqueInput
  ): Promise<Application[]> {
    const query = plainToClass(ApplicationFindManyArgs, request.query);
    const results = await this.service.findApplications(params.id, {
      ...query,
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        jobOpening: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/applications")
  async connectApplications(
    @common.Param() params: JobOpeningWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        connect: body,
      },
    };
    await this.service.updateJobOpening({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/applications")
  async updateApplications(
    @common.Param() params: JobOpeningWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        set: body,
      },
    };
    await this.service.updateJobOpening({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/applications")
  async disconnectApplications(
    @common.Param() params: JobOpeningWhereUniqueInput,
    @common.Body() body: ApplicationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applications: {
        disconnect: body,
      },
    };
    await this.service.updateJobOpening({
      where: params,
      data,
      select: { id: true },
    });
  }
}