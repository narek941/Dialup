import { FunctionComponent, SVGProps } from 'react';

import { BinanceFutureCoinIcon, BinanceFutureIcon, BinanceSpotIcon } from 'assets/icons';
import { AccountTabType } from 'components/views/Table/TableToolbar/types';

export type ISmsTab = {
  id: string;
  name: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  platformId: number;
};

export const SmsTab: ISmsTab[] = [
  {
    id: AccountTabType.CAMPAIGN,
    name: 'CAMPAIGN',
    Icon: BinanceFutureCoinIcon,
    platformId: 1,
  },
  {
    id: AccountTabType.CONTACT,
    name: 'USDT-M',
    Icon: BinanceFutureIcon,
    platformId: 2,
  },
  {
    id: AccountTabType.NOTIFICATION,
    name: 'COIN-M',
    Icon: BinanceFutureCoinIcon,
    platformId: 3,
  },
  {
    id: AccountTabType.RATE,
    name: 'COIN-M',
    Icon: BinanceFutureCoinIcon,
    platformId: 3,
  },
];

export default SmsTab;
