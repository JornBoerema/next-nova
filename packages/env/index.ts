import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const server: Parameters<typeof createEnv>[0]["server"] = {
	DATABASE_URL: z.string().min(1),
};

const client: Parameters<typeof createEnv>[0]["client"] = {};

export const env = createEnv({
	server,
	client,
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
	},
});
