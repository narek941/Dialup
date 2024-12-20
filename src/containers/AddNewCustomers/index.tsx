import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { isEqual } from 'lodash';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks';
import { AddUserForm } from 'components';
import { AppDispatch, Routes } from 'types';
import { usersActions } from 'store/usersSlice';
import { adminActions, adminSelectors } from 'store/adminSlice';
import { accountsActions } from 'store/accountsSlice';
import { RoleType } from 'types/api';
import { authSelectors } from 'store/authSlice';

import styles from './AddNewCustomers.module.scss';
import { AddNewCustomersFormShape } from 'components/views/AddUserForm/types';

const AddNewCustomers = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch() as AppDispatch;
  const { id: userId } = useParams();
  const authRole = useSelector(authSelectors.selectRole);

  const id = Number(userId);
  const { username, role, email, password, allowedAccountIds } = useSelector(
    adminSelectors.selectUserById,
  );
  const handleSubmit: SubmitHandler<AddNewCustomersFormShape> = async (values) => {
    const body = {
      email: values.email.trim(),
      password: values.password,
      name: values.name.trim(),
      role: values.routType,
      deviceToken: uuidv4(),
      allowedAccountIds: values.twilioRoute || [],
    } as any;

    if (!id) {
      await dispatch(usersActions.addNewUser(body)).unwrap();
    } else {
      const userUpdatedFieldsPromises = [];

      if (!isEqual(values.name, username)) {
        userUpdatedFieldsPromises.push(
          dispatch(adminActions.updateUsername({ userID: id, username: values.name })).unwrap(),
        );
      }
      if (!isEqual(values.email, email)) {
        userUpdatedFieldsPromises.push(
          dispatch(adminActions.updateUserEmail({ userID: id, email: values.email })).unwrap(),
        );
      }
      if (!isEqual(values.routType, role)) {
        userUpdatedFieldsPromises.push(
          dispatch(adminActions.updateUserRole({ userID: id, role: values.routType })).unwrap(),
        );
      }
      if (values.password && !isEqual(values.password, password)) {
        userUpdatedFieldsPromises.push(
          dispatch(
            adminActions.updateUserPassword({ userID: id, password: values.password }),
          ).unwrap(),
        );
      }
      if (values.routType && !isEqual(values.routType, allowedAccountIds)) {
        userUpdatedFieldsPromises.push(
          dispatch(
            adminActions.updateUserAllowedAccounts({
              userID: id,
              allowedAccountIds: values.routType as any,
            }),
          ).unwrap(),
        );
      }

      await Promise.all(userUpdatedFieldsPromises);
    }
    navigate(Routes.Customers);
  };

  useEffect(() => {
    if (id) {
      dispatch(adminActions.getUserById(id));

      return () => {
        dispatch(adminActions.removeUserById());
      };
    }
    dispatch(accountsActions.getAllAccounts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authRole && authRole !== RoleType.ADMIN) {
    return <Navigate to={Routes.Home} replace />;
  }

  return (
    <div className={styles.container}>
      <AddUserForm onClick={handleSubmit} isEditable={!!id} />
    </div>
  );
};

export default AddNewCustomers;
