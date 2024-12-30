import type { Rule } from '@unocss/core';

export const grid: Rule[] = [
  [
    /^(?:grid-)?(rows|cols)-(\d+)$/,
    ([, type, size]) => ({
      display: 'grid',
      [`grid-template-${type}`]: `repeat(${size}, minmax(0, 1fr))`,
    })
  ],

];

export default grid;