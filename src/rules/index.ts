import type { Rule } from '@unocss/core'
import border from './border'
import grid from './grid'

export const rules: Rule[] = [
  ...border,
  ...grid,
]

export default rules