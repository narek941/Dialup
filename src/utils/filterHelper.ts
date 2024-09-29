import { AlertType, RoleType } from 'types/api';

export const sideOptions = [
  { label: 'BUY', value: 'BUY' },
  { label: 'SELL', value: 'SELL' },
];

export const ordersTypeOptions = [
  { label: 'Market', value: 'MARKET' },
  { label: 'Limit', value: 'LIMIT' },
  { label: 'Stop loss', value: 'STOP_LOSS' },
  { label: 'Stop loss limit', value: 'STOP_LOSS_LIMIT' },
  { label: 'Take profit', value: 'TAKE_PROFIT' },
  { label: 'Take profit limit', value: 'TAKE_PROFIT_LIMIT' },
  { label: 'Limit maker', value: 'LIMIT_MAKER' },
  { label: 'Stop', value: 'STOP' },
  { label: 'Stop market', value: 'STOP_MARKET' },
  { label: 'Take profit market', value: 'TAKE_PROFIT_MARKET' },
  { label: 'Trailing stop market', value: 'TRAILING_STOP_MARKET' },
];

export const typeOptions = [
  { label: 'Inflow', value: 'DEPOSIT' },
  { label: 'Outflow', value: 'WITHDRAWAL' },
];

export const platformType = { '1': 'SPOT', '2': 'FAPI', '3': 'DAPI' };

export const statusOptions = [
  { label: 'Active', value: 'ACTIVE' },
  { label: 'Blocked', value: 'BLOCKED' },
];

export const AccountTypeOptions = [
  {
    label: 'Administrator',
    value: RoleType.ADMIN as string,
  },
  {
    label: 'Analyst',
    value: RoleType.ANALYST as string,
  },
  {
    label: 'Viewer',
    value: RoleType.VIEWER as string,
  },
];

export const AlertsTypeOptions = [
  {
    label: 'Trade Fulfilled',
    value: AlertType.TRADE_FULFILLED as string,
  },
  {
    label: 'Stop Order Placed',
    value: AlertType.STOP_ORDER_PLACED as string,
  },
  {
    label: 'Stop Order Not Placed',
    value: AlertType.STOP_ORDER_NOT_PLACED as string,
  },
  {
    label: 'Maximum Drawdown Exceeded',
    value: AlertType.MAXIMUM_DRAWDOWN_EXCEEDED as string,
  },
  {
    label: 'Wrong Currency',
    value: AlertType.WRONG_CURRENCY as string,
  },
  {
    label: 'Maximum Position Exceeded',
    value: AlertType.MAXIMUM_POSITION_EXCEEDED as string,
  },
  {
    label: 'Risk Position',
    value: AlertType.RISK_POSITION as string,
  },
];
