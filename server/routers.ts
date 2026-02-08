import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createConsultation, getConsultationsByUserId, getAllConsultations } from "./consultations";
import { createApplication, getApplicationsByUserId, getAllApplications } from "./applications";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  consultations: router({
    create: protectedProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string().optional(),
        preferredDate: z.date(),
        preferredTime: z.string(),
        message: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await createConsultation({
          userId: ctx.user.id,
          ...input,
        });
        return { success: true };
      }),
    myConsultations: protectedProcedure
      .query(async ({ ctx }) => {
        return await getConsultationsByUserId(ctx.user.id);
      }),
    all: protectedProcedure
      .query(async ({ ctx }) => {
        // Only admin can view all consultations
        if (ctx.user.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await getAllConsultations();
      }),
  }),

  applications: router({
    create: protectedProcedure
      .input(z.object({
        programType: z.string(),
        fullName: z.string(),
        email: z.string().email(),
        phone: z.string().optional(),
        institution: z.string(),
        yearOfStudy: z.string().optional(),
        interests: z.string().optional(),
        experience: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await createApplication({
          userId: ctx.user.id,
          ...input,
        });
        return { success: true };
      }),
    myApplications: protectedProcedure
      .query(async ({ ctx }) => {
        return await getApplicationsByUserId(ctx.user.id);
      }),
    all: protectedProcedure
      .query(async ({ ctx }) => {
        // Only admin can view all applications
        if (ctx.user.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await getAllApplications();
      }),
  }),
});

export type AppRouter = typeof appRouter;
