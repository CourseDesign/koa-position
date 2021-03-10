import { ParsedUrlQuery } from "querystring";
import Position from "./position";
import DefaultPosition from "./default-position";

function query(key?: keyof ParsedUrlQuery): Position {
  return new DefaultPosition({
    inject: (ctx, value): void => {
      if (key !== undefined) {
        ctx.request.query[key] = value as never;
      }
    },
    extract: (ctx) => {
      if (key !== undefined) {
        return ctx.request.query[key];
      }
      return ctx;
    },
  });
}

export default query;
