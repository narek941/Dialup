import { FormField } from 'components/views/Table/Filters/types';

export const filterFormFields: FormField[] = [
  {
    name: 'identifier',
    type: 'Search',
    id: 'filterForm.identifier',
    placeholder: 'Enter Identifier',
  },

  {
    name: 'hosts',
    type: 'Search',
    id: 'filterForm.hosts',
    placeholder: 'Enter Hosts',
  },
  {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },

  {
    name: 'domain',
    type: 'Search',
    id: 'filterForm.domain',
    placeholder: 'Enter Domain',
  },
];
