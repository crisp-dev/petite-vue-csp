import { Context } from '../context';
export interface Directive<T = Element> {
    (ctx: DirectiveContext<T>): (() => void) | void;
}
export interface DirectiveContext<T = Element> {
    el: T;
    get: (exp?: string) => any;
    exp: string;
    arg?: string;
    modifiers?: Record<string, true>;
    ctx: Context;
}
export declare const builtInDirectives: Record<string, Directive<any>>;
