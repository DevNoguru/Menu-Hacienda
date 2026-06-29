import * as React from 'react';

export interface SignCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Panel ground. @default 'indigo' */
  ground?: 'indigo' | 'brick' | 'bone';
  /** Display headline (set in El Camino Caps). @default 'NOTICE' */
  title?: string;
  /** Optional skewed ribbon sub-label. */
  ribbon?: string;
  /** Optional supporting note (Metallophile, tracked uppercase). */
  note?: string;
  /** Show the greca border at the bottom edge. @default true */
  greca?: boolean;
}

/**
 * @startingPoint section="Signage" subtitle="Dimensional sign panel with greca edge" viewport="420x420"
 */
export declare function SignCard(props: SignCardProps): JSX.Element;
