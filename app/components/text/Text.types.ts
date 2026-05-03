import React from 'react';

export type TextComponents = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
export type TextSize = 'h1' | 'h2' | 'paragraph-medium';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'complited'
  | 'in-progress'
  | 'on-tack'
  | 'not-started';

export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ref?: React.Ref<HTMLParagraphElement> | null;
  component?: TextComponents;
  children: React.ReactNode;
  size: TextSize;
  color?: TextColor;
}
