import { RoutingTypeOptions, TwilioOptions } from 'utils/filterHelper';

import { FormField } from '../../forms/types';

import { AddNewCustomersFormShape } from './types';

export const addCustomersFormFields: FormField<keyof AddNewCustomersFormShape> = {
  name: {
    name: 'name',
    type: 'text',
    label: 'Name',
    id: 'addCustomer.name',
    placeholder: 'Enter Name',
  },
  lastname: {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    id: 'addCustomer.lastname',
    placeholder: 'Enter Last Name',
  },
  email: {
    name: 'email',
    type: 'text',
    id: 'addCustomer.email',
    label: 'Email Address',
    placeholder: 'Enter Email',
  },
  password: {
    name: 'password',
    type: 'password',
    label: 'Password',
    id: 'addCustomer.password',
    placeholder: 'Enter Password',
  },
  confirmPassword: {
    name: 'confirmPassword',
    type: 'password',
    label: 'Repeat Password',
    id: 'addCustomer.confirmPassword',
    placeholder: 'Confirm Password',
  },
  twilioRoute: {
    name: 'twilioRoute',
    label: 'TWILIO Route',
    id: 'addCustomer.twilioRoute',
    placeholder: 'Select',
    options: TwilioOptions,
  },
  routType: {
    name: 'routType',
    label: 'Routing Type',
    id: 'addCustomer.usersAccountType',
    placeholder: 'Select',
    options: RoutingTypeOptions,
  },
};

export const addSchemaKeys = Object.keys(
  addCustomersFormFields,
) as (keyof AddNewCustomersFormShape)[];
