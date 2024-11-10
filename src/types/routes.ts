export type RoutesProps = {
  path: string;
  text: string;
  isBackBtn?: boolean;
  withHeader?: boolean;
  isProtected?: boolean;
  component: JSX.Element;
  to?: string;
  withMail?: boolean;
};

export enum Routes {
  Error = '*',
  Default = '#',
  Home = '/',
  Login = '/login',
  Customers = '/customers',

  Trunks = '/trunks',
  Users = '/users',
  Numbers = '/numbers',
  Routing = '/routing',
  Recording = '/recording',
  Cdr = '/cdr',
  Extensions = '/extensions',
  Meetings = '/meetings',
  Sms = '/sms',
  Api = '/api',

  EditUser = '/users/edit',

  AddNewCustomers = '/customers/create',
  AddNewUsers = '/users/create',

  AddNewTrunk = '/trunks/create',
  AddNewRecording = '/recording/create',

  AddNewNumber = '/numbers/create',
  AddNewRoute = '/routing/create',

  AddNewUser = '/users/create',
  AddNewMeeting = '/meeting/create',

  AddNewAccount = '/accounts/create',
  EditAccount = '/accounts/edit',

  ViewCustomers = '/customers/:id',
}

export type ParamsWithId = {
  id: string;
};
