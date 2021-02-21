import { DefaultContext, DefaultState, ExtendableContext } from "koa";
import Position from "./position";

function context<CustomT = DefaultContext>(
  key?: keyof ExtendableContext & CustomT
): Position<DefaultState, CustomT> {
  return {
    inject: (ctx, value): void => {
      if (key !== undefined) {
        ctx[key] = value as any;
      }
    },
    extract: (ctx) => {
      if (key !== undefined) {
        return ctx[key];
      }
      return ctx;
    },
  };
}
export default context;
