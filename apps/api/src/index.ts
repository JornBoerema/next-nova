import { serve } from "@hono/node-server";
import app from "./app.js";

const port = 3001;

serve({
	fetch: app.fetch,
	port,
});

console.log(`Bijvoorbeeld Zo Helper API running on http://localhost:${port}`);
