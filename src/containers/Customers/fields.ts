import { FormField } from '../../components/views/Table/Filters/types';

export const filterFormFields: FormField[] = [
  {
    name: 'name',
    type: 'Search',
    id: 'filterForm.name',
    placeholder: 'Enter Name',
  },

  {
    name: 'lastname',
    type: 'Search',
    id: 'filterForm.lastname',
    placeholder: 'Enter Lastname',
  },
  {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },

  {
    name: 'email',
    type: 'Search',
    id: 'filterForm.email',
    placeholder: 'Enter Email',
  },
  {
    name: 'status',
    type: 'select',
    id: 'filterForm.status',
    placeholder: 'Select status',
  },
];
