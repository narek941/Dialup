import { SyntheticEvent } from 'react';
export interface AlertProps {
  ref?: any;
  open: boolean;
  className?: string;
  type?: AlertType;
  handleClose: (e: SyntheticEvent) => void;
  handleAction?: (id: number) => void;
  id?: number | null;
  isActionIsDone?: boolean;
  text?: string;
}

export type AlertType =
  | 'DELETE'
  | 'BLOCK'
  | 'UNBLOCK'
  | 'SYNCING'
  | 'SYNCING_ADD'
  | 'DELETE_INFLOW'
  | 'SYNCING_INFLOW';
