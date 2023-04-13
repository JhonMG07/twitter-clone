import { PrismaClient } from "@prisma/client";

declare global {
	// rome-ignore lint/style/noVar: <explanation>
	var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

//So here, we do a hot reaload
export default client;