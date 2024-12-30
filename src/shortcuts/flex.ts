import type { Shortcut } from '@unocss/core';

export const flex: Shortcut[] = [
  [
    'flex-row',
    'flex flex-direction-row',
  ],

  [
    'flex-col',
    'flex flex-direction-column',
  ],

  [
    'flex-reverse',
    'flex flex-direction-row-reverse',
  ],

  [
    'flex-col-reverse',
    'flex flex-direction-column-reverse',
  ],

  [
    'flex-between',
    'flex justify-between items-center',
  ],

  [
    'flex-around',
    'flex justify-around items-center',
  ],

  [
    'flex-evenly',
    'flex justify-evenly items-center',
  ],

  [
    'flex-start',
    'flex justify-start items-center',
  ],

  [
    'flex-end',
    'flex justify-end items-center',
  ],

  [
    'flex-wrap',
    'flex flex-wrap',
  ],

  [
    'flex-nowrap',
    'flex flex-nowrap',
  ],
];

export default flex;