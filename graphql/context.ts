// /graphql/context.ts
import { PrismaClient } from "@prisma/client";
import prisma from "@lib/prisma";
import { getSession } from "next-auth/react";

export type Context = {
  prisma: PrismaClient;
  session: any;
};
export async function createContext({ req, res }): Promise<Context> {
  const session = await getSession({ req });
  return {
    prisma,
    session,
  };
}
