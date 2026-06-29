import React from 'react';

/**
 * Badge — small tracked-uppercase tag/chip.
 */
export function Badge({ tone = 'gold', children, style, ...rest }) {
  const palette = {
    gold:       { bg: 'var(--ds-gold)',       fg: 'var(--ds-cocoa)' },
    terracotta: { bg: 'var(--ds-terracotta)', fg: 'var(--ds-cream)' },
    indigo:     { bg: 'var(--ds-indigo)',     fg: 'var(--ds-cream)' },
    neutral:    { bg: 'var(--ds-bone)',       fg: 'var(--ds-cocoa)' },
  }[tone] || {};

  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: palette.fg,
      background: palette.bg,
      padding: '5px 10px',
      borderRadius: 'var(--r-xs)',
      ...style,
    },
  }, children);
}
