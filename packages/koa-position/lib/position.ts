import Application, { DefaultContext, DefaultState } from "koa";

interface Position<StateT = DefaultState, CustomT = DefaultContext> {
  inject(
    ctx: Application.ParameterizedContext<StateT, CustomT>,
    value: unknown
  ): void | Promise<void>;
  extract(
    ctx: Application.ParameterizedContext<StateT, CustomT>
  ): unknown | Promise<unknown>;
}

export default Position;
