import type { Rule } from '@unocss/core';

export const border: Rule[] = [
  [
    /^(?:border|b)-([rltbse])(?:-(.+))?$/,
    ([, position, size = '1px']) => {
      const pos = {
        r: 'right',
        l: 'left',
        t: 'top',
        b: 'bottom',
        s: 'start',
        e: 'end'
      }[position];
      return {
        [`border-${pos}-width`]: handleBorderSize(size),
        [`border-${pos}-style`]: 'solid'
      };
    }
  ],

  [
    /^(?:border|b)(?:-(.+))?$/,
    ([, size = '1px']) => ({
      'border-width': handleBorderSize(size),
      'border-style': 'solid'
    })
  ],
  
  [
    /^(?:border|b)-([xy])(?:-(.+))?$/,
    ([, dir, size = '1px']) => {
      const directions = dir === 'x' ? ['left', 'right'] : ['top', 'bottom'];
      return Object.fromEntries(
        directions.map(d => [
          `border-${d}-width`, handleBorderSize(size)
        ]).concat(
          directions.map(d => [
            `border-${d}-style`, 'solid'
          ])
        )
      );
    }
  ]
];

function handleBorderSize(size = '1px') {
  return /\d+/.test(size) ? `${size}px` : size
}

export default border;