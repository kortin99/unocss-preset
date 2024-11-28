import { definePreset } from '@unocss/core'
import { rules } from './rules/index'

export { rules }

/**
 * @public
 */
export interface PresetOptions {
  // to be defined
}

export default definePreset((_options: PresetOptions) => {

  return {
    name: '@kortin/unocss-preset',
    rules,
  }
})