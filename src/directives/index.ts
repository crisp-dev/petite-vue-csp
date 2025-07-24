import { Context } from '../context'
import { on } from './on'
import { show } from './show'
import { text } from './text'
import { html } from './html'

export interface Directive<T = Element> {
  (ctx: DirectiveContext<T>): (() => void) | void
}

export interface DirectiveContext<T = Element> {
  el: T
  get: (exp?: string) => any
  exp: string
  arg?: string
  modifiers?: Record<string, true>
  ctx: Context
}

export const builtInDirectives: Record<string, Directive<any>> = {
  on,
  show,
  text,
  html
}
