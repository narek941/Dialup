import { SubmitHandler } from 'react-hook-form';

export type FilterFormShape = {
  name: string;
  lastname: string;
  email: string;
  id: string;
};

export interface IFilterForm {
  onClick: SubmitHandler<FilterFormShape>;
}
