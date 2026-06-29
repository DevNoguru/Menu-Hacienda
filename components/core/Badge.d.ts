import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default 'gold' */
  tone?: 'gold' | 'terracotta' | 'indigo' | 'neutral';
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
