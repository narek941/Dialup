import { HeadCell } from 'types';
import { Routes } from 'types/routes';

import { ActionType } from './TableToolbar/types';
import { FilterFormShape } from '../filters/TradesFilters/types';
import { FormField } from './Filters/types';

export interface Data {
  id: string;
  name: string;
  seed_capital: string;
  current_capital: string;
  time: string;
  open_profit: string;
  earned_capital: string;
  earned_capital_2: string;
  open_profit_2: string;
  status: string;
  trades: string;
  actions: any;
}

export type KeyOfData = keyof Data | keyof UserData;

export type RowsType = string[];

export type TypeType = 'primary' | 'secondary' | 'tertiary';

export interface ITableProps {
  rows: RowsType[];
  filterField: FormField[];
  headCells: HeadCell[];
  type: TypeType;
  sort?: string;
  action?:
    | ActionType.USERS
    | ActionType.ACCOUNTS
    | ActionType.CUSTOMERS
    | ActionType.TRUNKS
    | ActionType.NUMBERS
    | ActionType.ROUTINGS
    | ActionType.MEETINGS
    | ActionType.RECORDING;
  linkText?: 'user' | 'account' | 'customers' | 'trunks';
  linkTo?: Routes;
  take: number;
  order?: string;
  totalCount: number;
  page: number;
  tableName: string;
  dataCells: string[];
  handleSort: (event: React.MouseEvent<unknown>, property: any) => void;
  handleDelete?: (id: number) => void;
  handleStart?: () => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleStop?: () => void;
  showEditAction?: boolean;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSmsPermision?: (id: number) => void;
  handleAPIPermision?: (id: number) => void;
}
export interface UserData {
  id: string;
  name: string;
  message: string;
  alertTrigger: string;
  alertTime: string;
  email: string;
  accountType: string;
  status: string;
  action?: string;
}

export type Order = 'asc' | 'desc';

export type IStatus = 'ACTIVE' | 'DELETED' | 'BLOCKED';

export type SelectedAccount = {
  id: number | null;
  statistics: any | null;
  startCapitalInBaseCurrency: any | null;
  baseCurrency?: string;
  name: string;
  syncStatus: string;
};
