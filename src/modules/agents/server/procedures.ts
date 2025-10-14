import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, baseProcedure, protectedProcedure } from "@/trpc/init";
import { agentsInsertSchema } from "../schemas";
import { z } from "zod";
import { eq, getTableColumns, sql} from "drizzle-orm";
import { number } from "better-auth";
export const agentsRouter = createTRPCRouter({
  // getOne: baseProcedure.query(async () => {
  //   const data = await db
  //     .select()
  //     .from(agents);
  //   return data;

  // }), 
    getOne: baseProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [existingAgent] = await db
        .select({
          meetingCount: sql<number>'5',
          ...getTableColumns(agents),
    

        })
        .from(agents)
        .where(eq(agents.id, input.id));

      return existingAgent;
    }),
  
  
  getMany: baseProcedure.query(async () => {
    const data = await db
      .select()
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
                                                                                                                        