import { DefaultState } from "koa";
import Position from "./position";

function state<StateT = DefaultState>(key: keyof StateT): Position<StateT> {
  return {
    inject: (ctx, value: StateT[keyof StateT]): void => {
      if (value !== undefined) {
        ctx.state[key] = value;
      }
    },
    extract: (ctx) => ctx.state[key],
  };
}
export default state;
