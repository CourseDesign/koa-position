import { DefaultState } from "koa";
import Position from "./position";
import DefaultPosition from "./default-position";

function params<CustomT = Record<string, string>>(
  key?: keyof CustomT
): Position<DefaultState, { request: { params: CustomT } }> {
  return new DefaultPosition({
    inject: (ctx, value): void => {
      if (key !== undefined) {
        ctx.request.params[key] = value as never;
      } else {
        ctx.request.params = value as CustomT;
      }
    },
    extract: (ctx) => {
      if (key !== undefined) {
        return ctx.request.params[key];
      }
      return ctx;
    },
  });
}

export default params;
