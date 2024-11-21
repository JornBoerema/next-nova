import { Hono } from "hono";
import { logger } from "hono/logger";

export const createRouter = () => {
	return new Hono({ strict: false });
};

export const createApp = () => {
	const app = createRouter();

	app.use(logger());

	return app;
};
