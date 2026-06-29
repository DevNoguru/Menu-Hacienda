import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Control size. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * @startingPoint section="Core" subtitle="Tracked uppercase action button" viewport="700x150"
 */
export declare function Button(props: ButtonProps): JSX.Element;
