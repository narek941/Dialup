import { FormField } from 'components/views/Table/Filters/types';

export const filterFormFields: FormField[] = [
  {
    name: 'path',
    type: 'Search',
    id: 'filterForm.path',
    placeholder: 'Enter Path',
  },

  {
    name: 'name',
    type: 'Search',
    id: 'filterForm.name',
    placeholder: 'Enter name',
  },
  {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },

  {
    name: 'source',
    type: 'Search',
    id: 'filterForm.source',
    placeholder: 'Enter Source',
  },
  {
    name: 'listen',
    type: 'Search',
    id: 'filterForm.listen',
    placeholder: 'Enter listen',
  },
];
