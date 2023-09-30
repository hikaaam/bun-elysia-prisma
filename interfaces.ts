import { Env } from "bun";

export interface i_env extends Env {
  port: string;
}
