import { initTRPC } from "@trpc/server";

const t /*to for trpc */ = initTRPC.context().create()
export const router = t.router

/* creatting a public procedure, anything can call this api endpoint */

export const publicProcedure = t.procedure