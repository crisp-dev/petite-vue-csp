import { effect as rawEffect, ReactiveEffectRunner } from '@vue/reactivity';
import { Block } from './block';
import { Directive } from './directives';
import { PetiteVueImports } from './types';
export interface Context {
    key?: any;
    scope: Record<string, any>;
    dirs: Record<string, Directive>;
    blocks: Block[];
    effect: typeof rawEffect;
    effects: ReactiveEffectRunner[];
    cleanups: (() => void)[];
    delimiters: [string, string];
    delimitersRE: RegExp;
    remove: (arr: any[], item: any) => void;
    stop: (runner: ReactiveEffectRunner) => void;
    reactive: (obj: any) => any;
}
export declare const createContext: (imports: PetiteVueImports, parent?: Context | undefined) => Context;
export declare const createScopedContext: (ctx: Context, data?: {}) => Context;
export declare const bindContextMethods: (scope: Record<string, any>) => void;
