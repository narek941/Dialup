import { SubmitHandler } from 'react-hook-form';

export type FilterFormShape = {
  identifier: string;
  domain: string;
  hosts: string;
  id: string;
};

export interface IFilterForm {
  onClick: SubmitHandler<FilterFormShape>;
}
