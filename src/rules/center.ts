import type { Rule } from '@unocss/core';

export const center: Rule[] = [
  [
    'flex-center',
    {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
    },
  ],

  [
    'absolute-center',
    {
      position: 'absolute',
      'top': '50%',
      'left': '50%',
      transform: 'translate(-50%, -50%)',
      'z-index': '99',
    },
  ],
];

export default center;