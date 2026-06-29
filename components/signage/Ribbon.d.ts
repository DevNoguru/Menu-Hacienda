import * as React from 'react';

export interface RibbonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default 'peach' */
  tone?: 'peach' | 'terracotta' | 'gold';
  children?: React.ReactNode;
}

export declare function Ribbon(props: RibbonProps): JSX.Element;
