export interface IExport {
  className?: string;
  text?: string;
  callback: any;
}

export type ExportFormShape = {
  exportDateStart: any;
  exportDateEnd: any;
  exportDate: any;
};

export enum ExportType {
  pdf = 'pdf',
  csv = 'csv',
}

export interface DateState {
  startDate?: any;
  endDate?: any;
  color: string;
  key: 'selection';
}
