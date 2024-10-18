export interface IAAddNewCustomersForm {
  name: string;
  email: string;
  password: string;
  accountType: string;
}
export interface IAddNewCustomersProps {
  state?: {
    id?: number;
  };
}
