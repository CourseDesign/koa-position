import { DefaultContext, DefaultState, ExtendableContext } from "koa";
import Position from "./position";

function context<CustomT = DefaultContext>(
  key: keyof ExtendableContext & CustomT
): Position<DefaultState, CustomT> {
  return {
    inject: (ctx, value): void => {
      ctx[key] = value as any;
    },
    extract: (ctx) => ctx[key],
  };
}
export default context;
