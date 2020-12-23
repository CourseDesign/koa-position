import * as Cookies from "cookies";
import Position from "./position";

function cookies(
  key: string,
  options?: { get?: Cookies.GetOption; set?: Cookies.SetOption }
): Position {
  return {
    inject: (ctx, value?: string | null): void => {
      ctx.cookies.set(key, value, options?.set);
    },
    extract: (ctx) => ctx.cookies.get(key, options?.get),
  };
}
export default cookies;
