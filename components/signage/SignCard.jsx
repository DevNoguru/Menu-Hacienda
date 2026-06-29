import React from 'react';
import { Ribbon } from './Ribbon.jsx';

/**
 * SignCard — the signature Del Sol sign panel.
 * Dimensional El Camino headline + ribbon + supporting note + greca edge.
 */
export function SignCard({
  ground = 'indigo',
  title = 'NOTICE',
  ribbon,
  note,
  greca = true,
  style,
  ...rest
}) {
  const grounds = {
    indigo: { bg: 'var(--ds-indigo)', light: false },
    brick:  { bg: 'var(--ds-brick)',  light: false },
    bone:   { bg: 'var(--ds-bone)',   light: true  },
  };
  const g = grounds[ground] || grounds.indigo;

  const titleStyle = g.light
    ? { color: 'var(--ds-terracotta)', textShadow: 'var(--sign-inline-light)' }
    : { color: 'var(--ds-cream)', textShadow: 'var(--sign-inline)' };

  return React.createElement('div', {
    ...rest,
    style: {
      position: 'relative',
      background: g.bg,
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      aspectRatio: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      padding: '40px 28px',
      textAlign: 'center',
      ...style,
    },
  },
    React.createElement('div', {
      style: {
        fontFamily: 'var(--font-sign)',
        fontSize: 'clamp(48px, 11vw, 96px)',
        lineHeight: 'var(--lh-sign)',
        letterSpacing: 'var(--tr-sign)',
        ...titleStyle,
      },
    }, title),
    ribbon ? React.createElement(Ribbon, { tone: g.light ? 'terracotta' : 'peach' }, ribbon) : null,
    note ? React.createElement('div', {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        lineHeight: 1.35,
        maxWidth: 240,
        color: g.light ? 'var(--ds-cocoa)' : 'var(--ds-gold)',
      },
    }, note) : null,
    greca ? React.createElement('div', {
      style: {
        position: 'absolute', left: 0, right: 0, bottom: 0,
        height: 44,
        backgroundColor: 'var(--ds-indigo)',
        backgroundImage: 'var(--greca-tile)',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'bottom center',
        backgroundSize: 'auto 100%',
      },
    }) : null,
  );
}
