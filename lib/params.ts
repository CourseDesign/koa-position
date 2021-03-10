import { DefaultContext, DefaultState, ExtendableContext } from "koa";
import Position from "./position";
import DefaultPosition from "./default-position";

function params<CustomT = Record<string, string>>(
  key?: keyof CustomT
): Position<DefaultState, { params: CustomT }> {
  return new DefaultPosition({
    inject: (ctx, value): void => {
      if (key !== undefined) {
        ctx.params[key] = value as never;
      }
    },
    extract: (ctx) => {
      if (key !== undefined) {
        return ctx.params[key];
      }
      return ctx;
    },
  });
}

export default params;
