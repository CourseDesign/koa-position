import Position from "./position";
import DefaultPosition from "./default-position";
import {ParsedUrlQuery} from "querystring";

function query(
  key?: keyof ParsedUrlQuery
): Position {
  return new DefaultPosition({
    inject: (ctx, value): void => {
      if (key !== undefined) {
        ctx.query[key] = value as never;
      }
    },
    extract: (ctx) => {
      if (key !== undefined) {
        return ctx.query[key];
      }
      return ctx;
    },
  });
}

export default query;
