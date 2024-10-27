import { FormField } from '../../components/views/Table/Filters/types';

export const filterFormFields: FormField[] = [
  {
    name: 'name',
    type: 'Search',
    id: 'filterForm.name',
    placeholder: 'Enter Name',
  },

  {
    name: 'description',
    type: 'Search',
    id: 'filterForm.description',
    placeholder: 'Enter Description',
  },
  {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },
];
