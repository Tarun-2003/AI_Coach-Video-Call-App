import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure, protectedProcedure } from "@/trpc/init";
import { agentsInsertSchema } from "../schemas";
import { z } from "zod";
import { eq, getTableColumns, sql} from "drizzle-orm";
import { number } from "better-auth";
export const agentsRouter = createTRPCRouter({

    getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [existingAgent] = await db
        .select({
          meetingCount: sql<number>`5`,
          ...getTableColumns(agents),
    

        })
        .from(agents)
        .where(eq(agents.id, input.id));

      return existingAgent;
    }),
  
  
  getMany: protectedProcedure
      .input(
         z
        .object({
          page: z.number().default(1),
          pageSize: z.number().min(1).max(100).default(10),
          search: z.string().nullish(),
        })
        .optional()
      
    )
  .query(async () => {
    const data = await db
      .select({
               meetingCount: sql<number>`6`,
          ...getTableColumns(agents),
    

      })
      .from(agents);
    return data;
  }),
  create:protectedProcedure.input(agentsInsertSchema)
                           .mutation(async ({ input, ctx }) => {
      const [createdAgent] = await db
        .insert(agents)
        .values({
          ...input,
          userId: ctx.auth.user.id,
        })
        .returning();

      return createdAgent;
    }),
});
