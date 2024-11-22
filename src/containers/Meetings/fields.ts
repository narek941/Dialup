import { FormField } from '../../components/views/Table/Filters/types';

export const filterFormFields: FormField[] = [
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
    name: 'uuid',
    type: 'Search',
    id: 'filterForm.uuid',
    placeholder: 'Enter uuid',
  },
  {
    name: 'pin',
    type: 'Search',
    id: 'filterForm.pin',
    placeholder: 'Enter pin',
  },
  {
    name: 'participants',
    type: 'Search',
    id: 'filterForm.Participants',
    placeholder: 'Enter Participants',
  },
  {
    name: 'description',
    type: 'Search',
    id: 'filterForm.description',
    placeholder: 'Enter Description',
  },
];
