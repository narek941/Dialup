import { RowsType } from '../types';

export interface ITableBody {
  rows: RowsType[];
  tableName: string;
  handleDelete?: (id: number) => void;
  dataCells: string[];
  handleStart?: () => void;
  handleStop?: () => void;
  showEditAction?: boolean;
  handleSmsPermision?: (id: number) => void;
  handleAPIPermision?: (id: number) => void;
}
