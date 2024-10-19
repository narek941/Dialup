import { FormField } from '../../../forms/types';

import { FilterFormShape } from './types';

export const filterFormFields: FormField<keyof FilterFormShape> = {
  identifier: {
    name: 'identifier',
    type: 'Search',
    id: 'filterForm.identifier',
    placeholder: 'Enter Identifier',
  },

  hosts: {
    name: 'hosts',
    type: 'Search',
    id: 'filterForm.hosts',
    placeholder: 'Enter Hosts',
  },
  id: {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },

  domain: {
    name: 'domain',
    type: 'Search',
    id: 'filterForm.domain',
    placeholder: 'Enter Domain',
  },
};

export const filterSchemaKeys = Object.keys(filterFormFields) as (keyof FilterFormShape)[];
