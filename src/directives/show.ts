import { Directive } from '.'

export const show: Directive<HTMLElement> = ({ el, get, ctx }) => {
  const initialDisplay = el.style.display
  ctx.effect(() => {
    el.style.display = get() ? initialDisplay : 'none'
  })
}
