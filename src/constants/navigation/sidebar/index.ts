import { Routes } from 'types';
import {
  AvatarMultipleIcon,
  ListIcon,
  ExtensionsIcon,
  NumbersIcon,
  RoutingIcon,
  RecordingIcon,
  CdrIcon,
  MeetingsIcon,
  SmsIcon,
  ApiIcon,
} from 'assets/icons';

import { RoleType } from './../../../types/api/index';

type SidebarNavigationItem = {
  id: number;
  text: string;
  linkTo: Routes;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  admit: string;
};

const sidebarNavigation: SidebarNavigationItem[] = [
  {
    id: 1,
    text: 'customers_header',
    Icon: AvatarMultipleIcon,
    linkTo: Routes.Customers,
    admit: 'ALL',
  },
  {
    id: 2,
    Icon: ListIcon,
    text: 'trunks_header',
    linkTo: Routes.Trunks,
    admit: 'ALL',
  },
  {
    id: 3,
    text: 'extensions_header',
    linkTo: Routes.Extensions,
    Icon: ExtensionsIcon,
    admit: RoleType.ADMIN,
  },
  {
    id: 4,
    Icon: NumbersIcon,
    text: 'numbers_header',
    linkTo: Routes.Numbers,
    admit: 'ALL',
  },

  {
    id: 5,
    Icon: RoutingIcon,
    text: 'routing_header',
    linkTo: Routes.Routing,
    admit: 'ALL',
  },
  {
    id: 6,
    Icon: RecordingIcon,
    text: 'recording_header',
    linkTo: Routes.Recording,
    admit: 'ALL',
  },
  {
    id: 7,
    Icon: CdrIcon,
    text: 'cdr_header',
    linkTo: Routes.Cdr,
    admit: 'ALL',
  },
  {
    id: 8,
    Icon: MeetingsIcon,
    text: 'meetings_header',
    linkTo: Routes.Meetings,
    admit: 'ALL',
  },
  {
    id: 9,
    Icon: SmsIcon,
    text: 'sms_header',
    linkTo: Routes.Sms,
    admit: 'ALL',
  },
  {
    id: 10,
    Icon: ApiIcon,
    text: 'api_header',
    linkTo: Routes.Api,
    admit: 'ALL',
  },
];

export default sidebarNavigation;