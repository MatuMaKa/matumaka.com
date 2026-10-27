import Lenis from 'lenis'
const lenis = matchMedia('(prefers-reduced-motion: reduce)').matches ? null : new Lenis()
const raf = t => { lenis.raf(t); requestAnimationFrame(raf) }
if (lenis) requestAnimationFrame(raf)
export const scrollTo = el => lenis ? lenis.scrollTo(el) : el.scrollIntoView()
