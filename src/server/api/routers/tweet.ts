import { db } from '~/server/db';
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

import { Prisma } from "@prisma/client";


export const tweetRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async ({ input: { content }, ctx }) => {
      return await ctx.db.tweet.create({
        data: { content, userId: ctx.session.user.id },
      });
    }),
}); 