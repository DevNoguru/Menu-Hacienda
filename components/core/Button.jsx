import React from 'react';

/**
 * Button — Del Sol Refresh primary action.
 * Tracked uppercase Metallophile on a warm soft-square.
 */
export function Button({ variant = 'primary', size = 'md', disabled = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);

  const palette = {
    primary:   { bg: 'var(--ds-terracotta)', fg: 'var(--ds-cream)', bd: 'transparent' },
    secondary: { bg: 'var(--ds-indigo)',     fg: 'var(--ds-cream)', bd: 'transparent' },
    ghost:     { bg: 'transparent',          fg: 'var(--ds-cocoa)', bd: 'var(--ds-line)' },
  }[variant] || {};

  const sizing = {
    sm: { padding: '8px 16px',  fontSize: 13 },
    md: { padding: '12px 24px', fontSize: 15 },
    lg: { padding: '16px 34px', fontSize: 17 },
  }[size] || {};

  return React.createElement('button', {
    ...rest,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: palette.fg,
      background: palette.bg,
      border: `1px solid ${palette.bd}`,
      borderRadius: 'var(--r-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      boxShadow: variant === 'ghost' ? 'none' : (hover ? 'var(--shadow-2)' : 'var(--shadow-1)'),
      filter: hover && !disabled && variant !== 'ghost' ? 'brightness(0.94)' : 'none',
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      transition: 'all var(--dur-med) var(--ease-soft)',
      ...sizing,
      ...style,
    },
  }, children);
}
