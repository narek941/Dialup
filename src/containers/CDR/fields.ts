import { FormField } from '../../components/views/Table/Filters/types';

export const filterFormFields: FormField[] = [
  {
    name: 'date',
    type: 'Search',
    id: 'filterForm.date',
    placeholder: 'Enter date',
  },

  {
    name: 'from',
    type: 'Search',
    id: 'filterForm.from',
    placeholder: 'Enter from',
  },
  {
    name: 'to',
    type: 'Search',
    id: 'filterForm.to',
    placeholder: 'Enter to',
  },
  {
    name: 'duration',
    type: 'Search',
    id: 'filterForm.duration',
    placeholder: 'Enter duration',
  },
  {
    name: 'inChannel',
    type: 'Search',
    id: 'filterForm.inChannel',
    placeholder: 'Enter IN channel',
  },
  {
    name: 'outChannel',
    type: 'Search',
    id: 'filterForm.outChannel',
    placeholder: 'Enter out Channel',
  },
  {
    name: 'lastStep',
    type: 'Search',
    id: 'filterForm.lastStep',
    placeholder: 'Enter last Step',
  },
  {
    name: 'id',
    type: 'Search',
    id: 'filterForm.id',
    placeholder: 'Enter ID',
  },
];
