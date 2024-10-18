import { FormField } from '../../../forms/types';

import { FilterFormShape } from './types';

export const filterFormFields: FormField<keyof FilterFormShape> = {
  name: {
    name: 'name',
    type: 'Search',
    id: 'filterForm.name',
    placeholder: 'Enter Name',
  },

  lastname: {
    name: 'lastname',
    type: 'Search',
    id: 'filterForm.lastname',
    placeholder: 'Enter Lastname',
  },
  id: {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },

  email: {
    name: 'email',
    type: 'Search',
    id: 'filterForm.email',
    placeholder: 'Enter Email',
  },
};

export const filterSchemaKeys = Object.keys(filterFormFields) as (keyof FilterFormShape)[];
