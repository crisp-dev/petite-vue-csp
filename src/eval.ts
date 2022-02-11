// @ts-ignore
import SafeExpression from "safe-expression";

const safe_execute = new SafeExpression();

export const evaluate = (scope: any, exp: string, el?: Node) => {
  return execute(scope, exp, el)
}

export const execute = (scope: any, exp: string, el?: Node) => {
  try {
    return safe_execute(exp)(scope)
  } catch (e) {
    if (import.meta.env.DEV) {
      console.warn(`Error when evaluating expression "${exp}":`)
    }
    console.error(e)
  }
}