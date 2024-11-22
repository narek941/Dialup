import { SubmitHandler } from 'react-hook-form';

export interface IFilterForm {
  onClick: SubmitHandler<FilterFormShape>;
}
// types.ts
export type FilterFieldType = 'Search' | 'select' | 'Range';

export interface FormField {
  name: string;
  type: FilterFieldType;
  id: string;
  placeholder: string;
  options?: { label: string; value: string }[]; // For 'select' type fields
}

export interface FilterFormShape {
  accountName: string;
  accountStatus: string;
  accountAVGTrades: [string, string];
  accountId: string;
  accountSeed: [string, string];
  accountCurrentCapital: [string, string];
  accountOpenProfit: [string, string];
  accountEarnedCapital: [string, string];
}

export interface IFilter {
  filterField: Record<keyof any, any>;
}
