import store from 'store';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export enum Slice {
  Auth = 'auth',
  Users = 'users',
  Admin = 'admin',
  Theme = 'theme',
  Alerts = 'alerts',
  Accounts = 'accounts',
  Wallets = 'wallets',
}

export type IFilterPayload =
  | { skip: number }
  | { take: number }
  | { sort: string }
  | { search: string }
  | { order: 'DESC' | 'ASC' }
  | { filter: any };
