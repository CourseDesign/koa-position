import { DefaultState, Request } from "koa";
import Position from "./position";

function request<T = unknown>(
  key?: keyof (T & Request)
): Position<DefaultState, { request: T & Request }> {
  return {
    inject: (ctx, value): void => {
      if (key !== undefined) {
        ctx.request[key] = value as (Request & T)[keyof (T & Request)];
      }
    },
    extract: (ctx) => {
      if (key !== undefined) {
        return ctx.request[key];
      }
      return ctx.request;
    },
  };
}
export default request;
