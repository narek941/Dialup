import Trunks from 'containers/Trunks';

import {
  Error,
  SignIn,
  Customers,
  Extensions,
  Numbers,
  Routing,
  CDR,
  Meetings,
  Recording,
  Sms,
  Api,
  AddNewCustomers,
} from '../containers';
import { RoutesProps, Routes } from '../types';
import Home from 'containers/Home';
import CustomersDetail from 'containers/Customers/CustomersDetail';
import Users from 'containers/Users';

const routes: RoutesProps[] = [
  {
    path: Routes.Login,
    text: 'login_header',
    component: <SignIn />,
    withHeader: false,
  },
  {
    path: Routes.AddNewCustomers,
    text: 'users_settings_header',
    isProtected: true,
    component: <AddNewCustomers />,
    isBackBtn: true,
  },
  {
    path: `${Routes.EditUser}/:id`,
    text: 'users_settings_header',
    isProtected: true,
    component: <AddNewCustomers />,
    isBackBtn: true,
  },
  // {
  //   path: `${Routes.Accounts}/analytics/:id`,
  //   text: 'accounts_analytics_header',
  //   isProtected: true,
  //   isBackBtn: true,
  //   component: <AccountsAnalytics />,
  //   withMail: true,
  //   to: Routes.Accounts,
  // },
  {
    path: Routes.AddNewAccount,
    text: 'accounts_settings_header',
    isProtected: true,
    component: <AddNewCustomers />,
    isBackBtn: true,
  },
  {
    path: Routes.Home,
    text: '',
    isProtected: true,
    component: <Home />,
  },
  {
    path: `${Routes.EditAccount}/:id`,
    text: 'accounts_settings_header',
    isProtected: true,
    component: <AddNewCustomers />,
    isBackBtn: true,
  },
  {
    path: Routes.Numbers,
    text: 'numbers_header',
    isProtected: true,
    component: <Numbers />,
  },
  {
    path: Routes.Customers,
    text: 'customers_header',
    isProtected: true,
    component: <Customers />,
  },
  {
    path: Routes.Trunks,
    text: 'trunks_header',
    isProtected: true,
    component: <Trunks />,
  },
  {
    path: Routes.Extensions,
    text: 'extensions_header',
    isProtected: true,
    component: <Extensions />,
  },
  {
    path: Routes.Error,
    text: 'error_header',
    withHeader: false,
    isProtected: false,
    component: <Error />,
  },
  {
    path: Routes.Routing,
    text: 'routing_header',
    isProtected: true,
    component: <Routing />,
  },
  {
    path: Routes.Recording,
    text: 'recording_header',
    isProtected: true,
    component: <Recording />,
  },
  {
    path: Routes.Cdr,
    text: 'cdr_header',
    isProtected: true,
    component: <CDR />,
  },
  {
    path: Routes.Meetings,
    text: 'meetings_header',
    isProtected: true,
    component: <Meetings />,
  },
  {
    path: Routes.Sms,
    text: 'sms_header',
    isProtected: true,
    component: <Sms />,
  },
  {
    path: Routes.Api,
    text: 'api_header',
    isProtected: true,
    component: <Api />,
  },
  {
    path: Routes.ViewCustomers,
    text: 'customer_details_header',
    isProtected: true,
    component: <CustomersDetail />,
    isBackBtn: true,
  },
  {
    path: Routes.Users,
    text: 'user_header',
    isProtected: true,
    component: <Users />,
  },
  {
    path: Routes.AddNewUsers,
    text: 'customer_details_header',
    isProtected: true,
    component: <Users />,
    // isBackBtn: true,
  },
];

export default routes;
