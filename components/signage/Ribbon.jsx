import React from 'react';

/**
 * Ribbon — the skewed slim banner (El Camino Slim) for sub-labels.
 */
export function Ribbon({ tone = 'peach', children, style, ...rest }) {
  const palette = {
    peach:      { bg: 'var(--ds-peach)',      fg: 'var(--ds-indigo)' },
    terracotta: { bg: 'var(--ds-terracotta)', fg: 'var(--ds-cream)' },
    gold:       { bg: 'var(--ds-gold)',       fg: 'var(--ds-cocoa)' },
  }[tone] || {};

  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sign-slim)',
      fontSize: 18,
      letterSpacing: '0.02em',
      background: palette.bg,
      color: palette.fg,
      padding: '6px 24px',
      transform: 'skewX(var(--ribbon-skew))',
      boxShadow: '2px 2px 0 rgba(0,0,0,.14)',
      ...style,
    },
  }, React.createElement('span', {
    style: { display: 'inline-block', transform: 'skewX(calc(-1 * var(--ribbon-skew)))' },
  }, children));
}
