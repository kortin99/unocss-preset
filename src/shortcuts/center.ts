import type { Shortcut } from '@unocss/core';

export const center: Shortcut[] = [
  [
    'absolute-center',
    'absolute top-1/2 left-1/2 -translate-1/2',
  ],

  [
    'flex-center',
    'flex items-center justify-center',
  ],

  [
    'flex-col-center',
    'flex flex-col items-center justify-center',
  ],

  [
    'fixed-center',
    'fixed top-1/2 left-1/2 -translate-1/2 z-99',
  ],

  [
    'grid-center',
    'grid place-items-center',
  ],

  [
    'inline-center',
    'inline-flex items-center justify-center',
  ]
];

export default center;