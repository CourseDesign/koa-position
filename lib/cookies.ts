import * as Cookies from "cookies";
import Position from "./position";

function cookies(
  key?: string,
  options?: { get?: Cookies.GetOption; set?: Cookies.SetOption }
): Position {
  return {
    inject: (ctx, value?: string | null): void => {
      if (key !== undefined) {
        ctx.cookies.set(key, value, options?.set);
      }
    },
    extract: (ctx) => {
      if (key !== undefined) {
        return ctx.cookies.get(key, options?.get);
      }
      return ctx.cookies;
    },
  };
}
export default cookies;
