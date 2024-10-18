import { SubmitHandler } from 'react-hook-form';

export type AddNewCustomersFormShape = {
  name: string;
  lastname: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  twilioRoute: string;
  routType: string;
};

export interface IAddUser {
  onClick: SubmitHandler<AddNewCustomersFormShape>;
  isEditable?: boolean;
}
