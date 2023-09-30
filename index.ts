import { Elysia } from "elysia";
import { i_env } from "./interfaces";
import router from "./src/router";

const app = new Elysia();

const env = Bun.env as i_env;

app.use(router);

app.listen(env.port, () => {
  console.log(`server running on port ${env.port}`);
  console.log(`Check API docs on \x1b[32mhttp://127.0.0.1:${env.port}/swagger`);
});
