import { isUndefined } from 'lodash';
import moment from 'moment';

import { platformType } from './filterHelper';

const parseAccountBody = (body: any, tradingPairs: any): any => {
  const alertTrigger = {
    maxDrawDown: Number(body.maxDrawdown),
    maxPositionSize: body.maxPosition,
    maxRiskPosition: body.maxRisk,
    longTradeAllowed: true,
    shortTradeAllowed: true,
    wrongCurrencyAlertRequired: body.wrongCurrencyAlert,
    stopLossOrderRequired: body.stopLossOrder,
  };
  const alertTriggerWithId = {
    id: body?.alertTriggers,
    ...alertTrigger,
  };
  const wallet = {
    platform: {
      id: body.exchange,
    },
    apiKey: body.apiKey,
    apiSecret: body.apiSecret,
    refreshInterval: body.refreshInterval,
    alertTriggers: body?.alertTriggers ? alertTriggerWithId : alertTrigger,
  };

  const walletWithId = {
    id: body?.walletId,
    ...wallet,
  };

  return {
    testnet: true,
    status: 'ACTIVE',
    name: body.name.trim(),
    // startCapitalInBaseCurrency: body.startCapital,
    baseCurrency: {
      id: body.baseCurrency,
    },
    allowedCurrencies: filterAllowedCurrency(body?.allowedPairs, tradingPairs).allowedCurrencies,
    wallets: [body?.walletId ? walletWithId : wallet],
    alertsDestinations: body.alertsDestinations,
    allowedPairs: filterAllowedCurrency(body?.allowedPairs, tradingPairs).allowedPairs,
  };
};

const filterAllowedCurrency = (data: any, tradingPairs: any) => {
  const allowedPairs: any[] = [];
  const allowedCurrencies: any[] = [];

  data?.map((item: any) => {
    if (isUndefined(item?.to?.id)) {
      allowedCurrencies.push({
        currency: {
          id: item?.from?.id,
        },
      });
    } else if (!isUndefined(item?.to?.id) && !isUndefined(item?.from?.id)) {
      const pair = tradingPairs.find(
        ({ to, from }: any) =>
          to?.id === Number(item?.to?.id) && from?.id === Number(item?.from?.id),
      );
      allowedPairs.push({ tradingPair: { id: pair?.id } });
    }
  });

  return { allowedPairs, allowedCurrencies };
};

const parseInflowBody = (body: any, api: '1' | '2' | '3') => ({
  coin: {
    id: Number(body?.coinName),
  },
  api: body.api || platformType[api || '1'],
  type: body?.transactionType,
  transactionFee: Number(body?.fees),
  amount: Number(body?.amount),
  createdAt: moment(body?.date).toISOString(),
  id: body?.id && body?.id,
});

const parseBody = {
  parseAccountBody,
  parseInflowBody,
};

export default parseBody;
