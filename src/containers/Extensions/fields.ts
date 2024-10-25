import { FormField } from '../../components/views/Table/Filters/types';

export const filterFormFields: FormField[] = [
  {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },
  {
    name: 'username',
    type: 'Search',
    id: 'filterForm.username',
    placeholder: 'Enter username',
  },

  {
    name: 'password',
    type: 'Search',
    id: 'filterForm.password',
    placeholder: 'Enter password',
  },

  {
    name: 'callerId',
    type: 'Search',
    id: 'filterForm.callerId',
    placeholder: 'Enter callerId',
  },
];
