import { createApp } from "./lib/create-app.js";
import { database } from "@repo/database";

const app = createApp();

app.get("/", async (c) => {
	return c.text("NextNova API");
});

app.get("/posts", async (c) => {
	const data = await database.post.findMany();

	return c.json(data);
});

export default app;
