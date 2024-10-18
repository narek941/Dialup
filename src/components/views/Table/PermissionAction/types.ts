import { IStatus } from '../types';

export interface IPermission {
  status: IStatus;
  id: number;
  handleUnblock: (id: number) => Promise<void>;
  handleBlock: (id: number) => Promise<void>;
  action: 'customers' | 'account';
  tooltipClasses?: string;
}
