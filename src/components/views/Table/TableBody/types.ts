import { ActionType } from '../TableToolbar/types';
import { RowsType } from '../types';

export interface ITableBody {
  rows: RowsType[];
  tableName: string;
  handleDelete?: (id: number) => void;
  dataCells: string[];
  handleStart?: () => void;
  action?:
    | ActionType.USERS
    | ActionType.ACCOUNTS
    | ActionType.CUSTOMERS
    | ActionType.TRUNKS
    | ActionType.NUMBERS
    | ActionType.ROUTINGS
    | ActionType.MEETINGS
    | ActionType.RECORDING
    | ActionType.EXTENTIONS;
  handleStop?: () => void;
  showEditAction?: boolean;
  handleSmsPermision?: (id: number) => void;
  handleAPIPermision?: (id: number) => void;
}
