/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PrismaClient } from '@prisma/client';
import { NODE_ENV } from './serverConfig';

// @ts-ignore
export const db :  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs> = globalThis.prisma || new PrismaClient();

if (NODE_ENV !== 'production') {
// @ts-ignore
  globalThis.prisma = db;
}