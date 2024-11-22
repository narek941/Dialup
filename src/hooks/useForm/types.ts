import { UseFormHandleSubmit } from 'react-hook-form/dist/types/form';
import { UseFormProps as UseReactHookFormProps, UseFormReturn, FieldValues } from 'react-hook-form';

// Type for form field names
export type FormFieldNames =
  | 'id'
  | 'name'
  | 'api'
  | 'email'
  | 'twilioRoute'
  | 'routType'
  | 'lastname'
  | 'identifier'
  | 'hosts'
  | 'domain'
  | 'apiKey'
  | 'maxRisk'
  | 'exchange'
  | 'searchID'
  | 'password'
  | 'exportDateEnd'
  | 'exportDateStart'
  | 'date'
  | 'exportDate'
  | 'selectFee'
  | 'apiSecret'
  | 'selectSide'
  | 'updatedTime'
  | 'isEditable'
  | 'selectPair'
  | 'rememberMe'
  | 'selectShare'
  | 'maxDrawdown'
  | 'maxPosition'
  | 'accountType'
  | 'selectValue'
  | 'creationTime'
  | 'baseCurrency'
  | 'creationDate'
  | 'allowedPairs'
  | 'stopLossOrder'
  | 'selectPairEnd'
  | 'searchReceived'
  | 'refreshInterval'
  | 'selectPairStart'
  | 'wrongCurrencyAlert'
  | 'alertsDestinations'
  | 'selectValueInBaseCurrency'
  | 'searchReceivedInBaseCurrency'
  | 'selectFeeInBaseCurrency'
  | 'searchWalletValueInBaseCurrency'
  | 'searchWalletValue'
  | 'selectWalletAsset'
  | 'selectInflowType'
  | 'selectInflowAsset'
  | 'selectInflowValue'
  | 'selectInflowValueInBaseCurrency'
  | 'searchInflowID'
  | 'historyID'
  | 'usersAccountList'
  | 'historyPair'
  | 'historyValue'
  | 'historyUpdateTime'
  | 'historySide'
  | 'historyType'
  | 'historyPairEnd'
  | 'historyPairStart'
  | 'searchHistoryStop'
  | 'historyValueInBaseCurrency'
  | 'searchHistoryLimit'
  | 'searchHistoryModifiers'
  | 'tradesDate'
  | 'tradesPair'
  | 'tradesSide'
  | 'tradesPrice'
  | 'tradesValue'
  | 'tradesTotalPrice'
  | 'tradesValueInBaseCurrency'
  | 'tradesFee'
  | 'tradesFeeInBaseCurrency'
  | 'alertType'
  | 'alertID'
  | 'alertMessage'
  | 'alertCreationDate'
  | 'login_email'
  | 'login_password'
  | 'login_rememberMe'
  | 'accountName'
  | 'accountStatus'
  | 'accountAVGTrades'
  | 'accountId'
  | 'accountSeed'
  | 'accountCurrentCapital'
  | 'accountOpenProfit'
  | 'accountEarnedCapital'
  | 'userName'
  | 'userStatus'
  | 'userId'
  | 'userType'
  | 'userEmail'
  | 'confirmPassword'
  | 'alertName'
  | 'transactionType'
  | 'coinName'
  | 'amount'
  | 'time'
  | 'fees'
  | 'usersAccountType';

// Shape lookup for form fields
export type FieldShapeLookup<K extends FormFieldNames> = {
  [P in K]?: Record<FormFieldNames, unknown>[P];
};

// UseFormProps with FieldValues constraint
export type UseFormProps<K extends FormFieldNames, T extends FieldValues> = {
  schemaKeys: K[];
  defaultValues?: UseReactHookFormProps<T>['defaultValues'];
  options?: Omit<UseReactHookFormProps<T>, 'defaultValues'>;
  mode?: any;
};

// UseFormReturnType with FieldValues constraint
export type UseFormReturnType<T extends FieldValues> = {
  isValid: boolean;
  isSubmitting: boolean;
  formMethods: UseFormReturn<T, unknown>;
  handleSubmit: UseFormHandleSubmit<T>;
};
