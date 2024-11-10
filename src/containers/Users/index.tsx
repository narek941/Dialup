import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loader, Table } from 'components';
import { Routes } from 'types/routes';
import { useAppDispatch } from 'hooks';
import { adminActions, adminSelectors } from 'store/adminSlice';
import { RoleType } from 'types/api';
import { authSelectors } from 'store/authSlice';
import { ActionType } from 'components/views/Table/TableToolbar/types';
import { testUsersList } from 'constants/test';
import { filterFormFields } from './fields';
import usersTable from 'constants/tables/users';

const Users = () => {
  const dispatch = useAppDispatch();

  const { list, usersFilter, totalCount } = useSelector(adminSelectors.selectAdmin);
  const role = useSelector(authSelectors.selectRole);

  const [isLoading, setIsLoading] = useState(true);

  const { take, order, sort } = usersFilter;

  useEffect(() => {
    const getUsers = async () => {
      try {
        await dispatch(adminActions.getUsersList(usersFilter)).unwrap();
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [dispatch, usersFilter]);

  if (role && role !== RoleType.ADMIN) {
    return <Navigate to={Routes.Home} replace />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Table
      page={0}
      take={take}
      sort={sort}
      order={order}
      type='secondary'
      filterField={filterFormFields}
      handleSort={() => {}}
      tableName='users'
      headCells={usersTable}
      handleChangePage={() => {}}
      action={ActionType.USERS}
      linkTo={Routes.AddNewUser}
      rows={testUsersList || list}
      handleChangeRowsPerPage={() => {}}
      dataCells={['id', 'name', 'lastname', 'email', 'role']}
      totalCount={totalCount || testUsersList.length}
    />
  );
};

export default Users;
