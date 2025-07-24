import { Directive } from '.'

export const html: Directive = ({ el, get, ctx }) => {
  ctx.effect(() => {
    el.innerHTML = get()
  })
}
