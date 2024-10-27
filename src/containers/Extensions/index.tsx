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
import { testCustomersList, testExtentionsList } from 'constants/test';
import { filterFormFields } from './fields';
import extentionsTable from 'constants/tables/extentions';

const Extensions = () => {
  const dispatch = useAppDispatch();

  const { list, usersFilter, totalCount } = useSelector(adminSelectors.selectAdmin);
  const role = useSelector(authSelectors.selectRole);

  const [isLoading, setIsLoading] = useState(true);

  const { take, order, sort } = usersFilter;

  /* eslint-disable no-console */
  const handleDelete = (id: number) => console.log('Delete ' + id);

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
      tableName='extensions'
      showEditAction
      headCells={extentionsTable}
      handleDelete={handleDelete}
      handleChangePage={() => {}}
      action={ActionType.EXTENTIONS}
      linkTo={Routes.AddNewCustomers}
      rows={testExtentionsList || list}
      handleChangeRowsPerPage={() => {}}
      dataCells={['id', 'username', 'password', 'callerId']}
      totalCount={totalCount || testCustomersList.length}
    />
  );
};

export default Extensions;
