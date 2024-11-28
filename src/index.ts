import { Preset } from '@unocss/core'
import { rules } from './rules/index'

export { rules }

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