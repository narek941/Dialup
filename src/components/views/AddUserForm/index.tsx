import { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Routes } from 'types';
import { useAppDispatch, useForm } from 'hooks';
import { adminSelectors } from 'store/adminSlice';
import { Button, Input, Select } from 'components';
import FormGroup from 'components/forms/FormGroup';
import FormWrapper from 'components/forms/FormWrapper';
import { AccountTypeOptions } from 'utils/filterHelper';
import { usersActions, usersSelectors } from 'store/usersSlice';
import { accountsActions, accountsSelectors } from 'store/accountsSlice';

import styles from './AddUserForm.module.scss';
import { AddNewCustomersFormShape, IAddUser } from './types';
import { addCustomersFormFields, addSchemaKeys } from './fields';

const AddUserForm = ({ onClick, isEditable = false }: IAddUser) => {
  const { t } = useTranslation();
  const userErrors = useSelector(usersSelectors.selectUsersError);
  const userAdminErrors = useSelector(adminSelectors.selectAdminError);

  const accountList = useSelector(accountsSelectors.selectAllAccountList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!accountList.length) {
      dispatch(accountsActions.getAllAccounts());
    }
    return () => {
      dispatch(usersActions.clearError());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { username, email, role, allowedAccounts } = useSelector(adminSelectors.selectUserById);

  const addCustomersFormDefaultValues = useMemo(
    () =>
      isEditable
        ? {
            isEditable: true,
            name: username,
            email: email,
            usersAccountType: AccountTypeOptions.find((option) => option.value === role)?.value,
            usersAccountList: allowedAccounts?.map((item: any) => item?.account?.id),
          }
        : {
            isEditable: false,
          },
    [allowedAccounts, email, isEditable, role, username],
  );

  const { formMethods, handleSubmit } = useForm<
    keyof AddNewCustomersFormShape,
    AddNewCustomersFormShape
  >({
    schemaKeys: addSchemaKeys,
    defaultValues: addCustomersFormDefaultValues,
  });

  // const accountsOptions = useMemo(
  //   () =>
  //     accountList?.map((account: any) => ({
  //       label: account.name,
  //       value: account.id,
  //     })),
  //   [accountList],
  // );

  useEffect(() => {
    if (isEditable) {
      formMethods.reset(addCustomersFormDefaultValues);
    }
  }, [addCustomersFormDefaultValues, formMethods, isEditable]);

  // const accountWatch = formMethods.watch();
  // const defaultMultipleValue = accountWatch.routType == RoleType.VIEWER && [];

  return (
    <>
      <FormWrapper {...{ formMethods }} onSubmit={handleSubmit(onClick)}>
        <FormGroup className={styles.signIn__form__group}>
          <>
            <p className={styles.signIn__form__group__header}>
              {isEditable ? t('edit_user') : t('add_user')}
            </p>

            <Input
              error={
                formMethods.formState.errors.name?.message ||
                userErrors?.name ||
                userAdminErrors?.name
              }
              {...addCustomersFormFields.name}
              {...formMethods.register('name')}
            />
            <Input
              error={
                formMethods.formState.errors.lastname?.message ||
                userErrors?.lastname ||
                userAdminErrors?.lastname
              }
              {...addCustomersFormFields.lastname}
              {...formMethods.register('lastname')}
            />
            <Input
              error={
                formMethods.formState.errors.email?.message ||
                userErrors?.email ||
                userAdminErrors?.email
              }
              {...addCustomersFormFields.email}
              {...formMethods.register('email')}
            />
            <Input
              error={formMethods.formState.errors.password?.message}
              {...addCustomersFormFields.password}
              {...formMethods.register('password')}
              haveRightIcon={true}
            />
            <Input
              error={formMethods.formState.errors.confirmPassword?.message}
              {...addCustomersFormFields.confirmPassword}
              {...formMethods.register('confirmPassword')}
              haveRightIcon={true}
            />
            <Controller
              control={formMethods.control}
              name={addCustomersFormFields.routType.name as keyof AddNewCustomersFormShape}
              render={({ field }) => (
                <Select
                  {...addCustomersFormFields.routType}
                  {...field}
                  withAction={false}
                  withClear={false}
                  error={formMethods.formState.errors.routType?.message}
                />
              )}
            />
            <Controller
              control={formMethods.control}
              name={addCustomersFormFields.twilioRoute.name as keyof AddNewCustomersFormShape}
              render={({ field }) => (
                <Select
                  {...addCustomersFormFields.twilioRoute}
                  {...field}
                  withAction={false}
                  withClear={false}
                  error={formMethods.formState.errors.twilioRoute?.message}
                />
              )}
            />
            {!isEditable ? (
              <div className={styles.signIn__form__group__button}>
                <Button type='submit' color='secondary' size='m'>
                  {t('add_user')}
                </Button>
              </div>
            ) : (
              <div className={styles.signIn__form__group__edit}>
                <Link to={Routes.Customers} className={styles.signIn__form__group__edit__cancel}>
                  {t('cancel')}
                </Link>
                <Button
                  type='submit'
                  color='secondary'
                  size='m'
                  className={styles.signIn__form__group__edit__save}
                >
                  {t('save_changes')}
                </Button>
              </div>
            )}
          </>
        </FormGroup>
      </FormWrapper>
    </>
  );
};

export default AddUserForm;
