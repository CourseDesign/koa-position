import Position from "./position";

const responseBody: Position = {
  inject: (ctx, value): void => {
    if (value !== undefined) {
      ctx.response.body = value;
    }
  },
  extract: (ctx) => ctx.response.body,
};

export default responseBody;
