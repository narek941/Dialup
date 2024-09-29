import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import FileSaver from 'file-saver';
import { RootState, Slice } from 'types';
import { accountsApi } from 'api';
import { ExportType } from 'components/shared/Export/types';

import { ITableFilter, IPlatform, IPlatformApi } from './../../types/api/index';
import { exportThunkType } from './types';
///Real data start
// export const getAccountList = createAsyncThunk(
//   `${Slice.Accounts}/accounts`,
//   async (
//     credentials: {
//       skip: number;
//       take: number;
//       sort: string;
//       order: string;
//       search: string;
//       filter: any;
//     },
//     thunkAPI,
//   ) => {
//     try {
//       const response = await accountsApi.accountListRequest({
//         ...credentials,
//         filter: {
//           ...credentials.filter,
//           platformId: (thunkAPI.getState() as RootState).accounts.accountByIdPlatform,
//         },
//       });

//       return {
//         list: response.data.list,
//         totalCount: response.data.totalCount,
//       };
//     } catch {
//       return thunkAPI.rejectWithValue({ error: '* Incorrect' });
//     }
//   },
// );

// export const getAccountById = createAsyncThunk(
//   `${Slice.Accounts}/accounts/id`,
//   async (userID: number, thunkAPI) => {
//     try {
//       const response = await accountsApi.accountByIdRequest(userID);

//       return {
//         account: response.data,
//       };
//     } catch {
//       return thunkAPI.rejectWithValue({ error: '* Incorrect' });
//     }
//   },
// );
///Real data End

export const getAccountSummary = createAsyncThunk(
  `${Slice.Accounts}/accounts/id/summary`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountSummaryRequest(id);

      return {
        summary: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountTradesList = createAsyncThunk(
  `${Slice.Accounts}/account-trades`,
  async (
    credentials: {
      skip: number;
      take: number;
      sort: string;
      order: string;
      search: string;
      id: string;
      filter: any;
    },
    thunkAPI,
  ) => {
    const { id, ...restCredentials } = credentials;

    try {
      const response = await accountsApi.accountTradesListRequest(id, {
        ...restCredentials,
        filter: {
          ...credentials.filter,
          api: (thunkAPI.getState() as RootState).accounts.accountByIdPlatformType,
        },
      });

      return {
        list: response.data.list,
        totalCount: response.data.totalCount,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountAlerts = createAsyncThunk(
  `${Slice.Accounts}/account-alerts`,
  async (
    credentials: {
      skip: number;
      take: number;
      sort: string;
      order: string;
      search: string;
      id: string;
    },
    thunkAPI,
  ) => {
    const { id, ...restCredentials } = credentials;

    try {
      const response = await accountsApi.accountAlertsRequest(id, restCredentials);

      return {
        list: response.data.list,
        totalCount: response.data.totalCount,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountAssetsChartData = createAsyncThunk(
  `${Slice.Accounts}/accounts/id/assets-chart-data`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountAssetChartRequest(id);

      return {
        chart: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

////Real data Start

// export const getAccountTradingPairsChartData = createAsyncThunk(
//   `${Slice.Accounts}/accounts/id/trading-pairs-chart-data`,
//   async (id: number, thunkAPI) => {
//     try {
//       const response = await accountsApi.accountTradingPairsChartRequest(id);

//       return {
//         chart: response.data,
//       };
//     } catch {
//       return thunkAPI.rejectWithValue({ error: '* Incorrect' });
//     }
//   },
// );
////Real data End

export const getAccountCapitalChartData = createAsyncThunk(
  `${Slice.Accounts}/accounts/:id/daily-account-statistics`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountCapitalChartRequest(id);

      return {
        chart: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountPerformanceChartData = createAsyncThunk(
  `${Slice.Accounts}/accounts/:id/daily-wallets-statistics`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountPerformanceChartRequest(id);

      return {
        chart: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAllAccounts = createAsyncThunk(`${Slice.Accounts}/list`, async (_, thunkAPI) => {
  try {
    const response = await accountsApi.getAllAccountsRequest();

    return {
      list: response.data,
    };
  } catch {
    return thunkAPI.rejectWithValue({ error: '* Incorrect' });
  }
});

export const exportAccountTrades = createAsyncThunk(
  `${Slice.Accounts}/accounts/id/export/trades/`,
  async (
    credentials: {
      filename: string;
      fromDate: Date | string;
      toDate: Date | string;
      id: string;
      type: ExportType;
    },
    thunkAPI,
  ) => {
    const { id, type, ...restCredentials } = credentials;

    try {
      const response = await accountsApi.accountTradesExportRequest(id, type, restCredentials);

      if (type === ExportType.pdf) {
        const blob = new Blob([response.data], { type: exportThunkType.pdf });
        FileSaver.saveAs(blob, restCredentials?.filename);
      } else {
        const csvData = new Blob([response.data], { type: exportThunkType.csv });
        FileSaver.saveAs(csvData, restCredentials?.filename);
      }
      return;
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountTradesFilterValues = createAsyncThunk(
  `${Slice.Accounts}/accounts/:id/trades-list/filter-values`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountTradesFilterValuesRequest(id);

      return {
        data: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountAlertsFilterValues = createAsyncThunk(
  `${Slice.Accounts}/accounts/:id/alerts/filter-values`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountAlertsFilterValuesRequest(id);

      return {
        data: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountCapitalChartDataLimit = createAsyncThunk(
  `${Slice.Accounts}/:id/daily-account-statistics-values`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountCapitalChartLimitRequest(id);

      return {
        data: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountsFilterValues = createAsyncThunk(
  `${Slice.Accounts}/accounts/list/filter-values`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountListFilterValuesRequest(id);

      return {
        data: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);
export const accountsFilterUpdate = createAction<Partial<ITableFilter>>('accountsFilter');

export const accountsFilterClear = createAction<Partial<ITableFilter>>('accountsFilterClear');

export const accountsTradesFilterUpdate =
  createAction<Partial<ITableFilter>>('accountsTradesFilter');

export const accountsAlertsFilterUpdate = createAction<Partial<ITableFilter>>(
  'accountsAlertsFilterUpdate',
);

export const accountsTradesFilterClear = createAction<Partial<ITableFilter>>(
  'accountsTradesFilterClear',
);

export const accountsAlertsFilterClear = createAction<Partial<ITableFilter>>(
  'accountsAlertsFilterClear',
);

export const platformUpdate = createAction<Partial<IPlatform>>('accountsPlatform');

export const platformApiTypeUpdate = createAction<Partial<IPlatformApi>>('accountsPlatformApi');

export const removeAccountById = createAction('removeAccountByID');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////Fake Data Start

export const getAccountList = createAsyncThunk(
  `${Slice.Accounts}/accounts`,
  async (
    credentials: {
      skip: number;
      take: number;
      sort: string;
      order: string;
      search: string;
      filter: any;
    },
    thunkAPI,
  ) => {
    try {
      const response = await accountsApi.accountListRequest({
        ...credentials,
        filter: {
          ...credentials.filter,
          platformId: (thunkAPI.getState() as RootState).accounts.accountByIdPlatform,
        },
      });

      return {
        list: response.data.list,
        totalCount: response.data.totalCount,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountById = createAsyncThunk(
  `${Slice.Accounts}/accounts/id`,
  async (userID: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountByIdRequest(userID);

      return {
        account: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

export const getAccountTradingPairsChartData = createAsyncThunk(
  `${Slice.Accounts}/accounts/id/trading-pairs-chart-data`,
  async (id: number, thunkAPI) => {
    try {
      const response = await accountsApi.accountTradingPairsChartRequest(id);

      return {
        chart: response.data,
      };
    } catch {
      return thunkAPI.rejectWithValue({ error: '* Incorrect' });
    }
  },
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////Fake Data END
