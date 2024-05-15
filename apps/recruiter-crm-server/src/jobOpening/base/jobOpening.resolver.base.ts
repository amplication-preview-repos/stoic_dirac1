/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { JobOpening } from "./JobOpening";
import { JobOpeningCountArgs } from "./JobOpeningCountArgs";
import { JobOpeningFindManyArgs } from "./JobOpeningFindManyArgs";
import { JobOpeningFindUniqueArgs } from "./JobOpeningFindUniqueArgs";
import { CreateJobOpeningArgs } from "./CreateJobOpeningArgs";
import { UpdateJobOpeningArgs } from "./UpdateJobOpeningArgs";
import { DeleteJobOpeningArgs } from "./DeleteJobOpeningArgs";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { Client } from "../../client/base/Client";
import { JobOpeningService } from "../jobOpening.service";
@graphql.Resolver(() => JobOpening)
export class JobOpeningResolverBase {
  constructor(protected readonly service: JobOpeningService) {}

  async _jobOpeningsMeta(
    @graphql.Args() args: JobOpeningCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [JobOpening])
  async jobOpenings(
    @graphql.Args() args: JobOpeningFindManyArgs
  ): Promise<JobOpening[]> {
    return this.service.jobOpenings(args);
  }

  @graphql.Query(() => JobOpening, { nullable: true })
  async jobOpening(
    @graphql.Args() args: JobOpeningFindUniqueArgs
  ): Promise<JobOpening | null> {
    const result = await this.service.jobOpening(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => JobOpening)
  async createJobOpening(
    @graphql.Args() args: CreateJobOpeningArgs
  ): Promise<JobOpening> {
    return await this.service.createJobOpening({
      ...args,
      data: {
        ...args.data,

        client: args.data.client
          ? {
              connect: args.data.client,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => JobOpening)
  async updateJobOpening(
    @graphql.Args() args: UpdateJobOpeningArgs
  ): Promise<JobOpening | null> {
    try {
      return await this.service.updateJobOpening({
        ...args,
        data: {
          ...args.data,

          client: args.data.client
            ? {
                connect: args.data.client,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => JobOpening)
  async deleteJobOpening(
    @graphql.Args() args: DeleteJobOpeningArgs
  ): Promise<JobOpening | null> {
    try {
      return await this.service.deleteJobOpening(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Application], { name: "applications" })
  async findApplications(
    @graphql.Parent() parent: JobOpening,
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    const results = await this.service.findApplications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  async getClient(
    @graphql.Parent() parent: JobOpening
  ): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
