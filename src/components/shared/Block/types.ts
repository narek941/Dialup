import { ReactNode } from 'react';

export interface IBlock {
  className?: string;
  header?: string;
  obj?: Record<string, string | number | undefined | null | string[]>;
  children?: ReactNode;
  isFullWidth?: boolean;
}
