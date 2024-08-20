import { publicProcedure, router } from "./trpc";

// this is my backend
export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 'Hello'
    }),
})

export type AppRouter = typeof appRouter