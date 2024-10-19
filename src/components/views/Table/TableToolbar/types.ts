import { Routes } from 'types';

export interface ITableToolbarProps {
  linkText?: 'user' | 'account' | 'customers' | 'trunks';
  linkTo?: Routes;
  onClick?: any;
  action: any;
}

export enum AccountTabType {
  BINANCE = 'BINANCE',
  BINANCE_FUTURES_USDTM = 'BINANCE_FUTURES_USDTM',
  BINANCE_FUTURES_COINM = 'BINANCE_FUTURES_COINM',
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
  ACCOUNTS = 'accounts',
  ALERTS = 'alerts',
  CUSTOMERS = 'customers',
  TRUNKS = 'trunks',
}

export enum OrderType {
  DESC = 'DESC',
  ASC = 'ASC',
}
