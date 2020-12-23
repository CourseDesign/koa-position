import { DefaultState } from "koa";
import Position from "./position";

const requestBody: Position<DefaultState, { request: { body: unknown } }> = {
  inject: (ctx, value): void => {
    ctx.request.body = value;
  },
  extract: (ctx) => ctx.request.body,
};

export default requestBody;
