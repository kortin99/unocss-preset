import type { CSSEntries, Rule, RuleContext } from '@unocss/core';

export const center: Rule[] = [
  [
    'flex-between',
    {
      display: 'flex',
      'justify-content': 'space-between',
    },
  ],

  [
    'flex-between-center',
    {
      display: 'flex',
      'justify-content': 'space-between',
      'align-items': 'center',
    },
  ],

  [
    'flex-row',
    {
      display: 'flex',
      'flex-direction': 'row',
    },
  ],

  [
    'flex-col',
    {
      display: 'flex',
      'flex-direction': 'column',
    },
  ],
];
