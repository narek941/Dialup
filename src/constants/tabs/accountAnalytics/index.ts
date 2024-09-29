import { TabType } from 'components/views/AnalyticsTabs/types';

type AccountAnalyticsTab = { id: string; name: string };

const accountAnalyticsTabs: AccountAnalyticsTab[] = [
  {
    id: TabType.campaigns,
    name: 'Campaigns',
  },
  {
    id: TabType.contacts,
    name: 'Contacts',
  },
  {
    id: TabType.notifications,
    name: 'Notifications',
  },
  {
    id: TabType.rates,
    name: 'Rates',
  },
  {
    id: TabType.settings,
    name: 'Settings',
  },
];

export default accountAnalyticsTabs;
