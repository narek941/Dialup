import { Routes } from 'types';
import { FormField } from '../Filters/types';

export interface ITableToolbarProps {
  linkText?: string;
  linkTo?: Routes;
  onClick?: any;
  filterField: FormField[];
  action: any;
}

export enum AccountTabType {
  NOTIFICATION = 'NOTIFICATION',
  RATE = 'RATE',
  CONTACT = 'CONTACT',
  CAMPAIGN = 'CAMPAIGN',
}

export enum FutureTabType {
  DAPI = 'DAPI',
  FAPI = 'FAPI',
}

export enum FutureType {
  USDT = 'USDT-M',
  COIN = 'COIN-M',
}

export enum ActionType {
  USERS = 'users',
  MEETINGS = 'meetings',
  ACCOUNTS = 'accounts',
  EXTENTIONS = 'extentions',
  CUSTOMERS = 'customers',
  TRUNKS = 'trunks',
  NUMBERS = 'numbers',
  ROUTINGS = 'routings',
  RECORDING = 'recording',
}

export enum OrderType {
  DESC = 'DESC',
  ASC = 'ASC',
}
