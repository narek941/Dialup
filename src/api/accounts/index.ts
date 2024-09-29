/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosRequestConfig } from 'axios';
import { client } from 'api';
import { ExportType } from 'components/shared/Export/types';
import { IExportParams } from 'types/api';

export const accountListRequest = (params: AxiosRequestConfig['params']) =>
  client.get('/accounts', { params });

// export const accountByIdRequest = (userID: number) => client.get(`/accounts/${userID}`); /// Real data
// export const accountSummaryRequest = (id: number) => client.get(`/accounts/${id}/summary`); /// Real data

/////FAKE DATA start
export const accountByIdRequest = (userID: number) => client.get(`/accountsByID`);
export const accountSummaryRequest = (id: number) => client.get(`/summary`);

/////FAKE DATA END

export const accountListForViewer = () => client.get(`/accounts/list`);

export const accountTradesListRequest = (id: string, params: any) =>
  client.get(`/accounts/${id}/trades-list`, {
    params,
  });

export const accountTradesExportRequest = (id: string, type: ExportType, params: IExportParams) =>
  client.get(`accounts/${id}/export/trades/${type}`, {
    params,
  });

export const accountTradesFilterValuesRequest = (id: number) =>
  client.get(`accounts/${id}/trades-list/filter-values`);

export const accountAlertsFilterValuesRequest = (id: number) =>
  client.get(`accounts/${id}/alerts/filter-values`);

export const accountListFilterValuesRequest = (id: number) =>
  client.get(`/accounts/list/filter-values`, {
    id,
  });

export const accountAlertsRequest = (id: string, params: any) =>
  client.get(`/accounts/${id}/alerts`, {
    params,
  });

export const accountAssetChartRequest = (id: number) =>
  client.get(`/accounts/${id}/assets-chart-data`);

export const accountTradingPairsChartRequest = (id: number) =>
  // client.get(`/accounts/${id}/trading-pairs-chart-data`); //Real data
  client.get(`/trading-pairs-chart-data`); ///Fake data

export const accountCapitalChartRequest = (id: number) =>
  client.get(`/accounts/${id}/daily-account-statistics`);

export const accountPerformanceChartRequest = (id: number) =>
  client.get(`/accounts/${id}/daily-wallets-statistics`);

export const getAllAccountsRequest = () => client.get(`/accounts/list`);

export const accountCapitalChartLimitRequest = (id: number) =>
  client.get(`/accounts/${id}/daily-account-statistics-values`);
