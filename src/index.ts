import { Preset } from '@unocss/core'
import { rules } from './rules/index'
import { shortcuts } from './shortcuts/index'

export { rules, shortcuts }

/**
 * @public
 */
export interface PresetOptions {
  // to be defined
}

export default function (_options?: PresetOptions): Preset {

  return {
    name: '@kortin/unocss-preset',
    rules,
  }
}