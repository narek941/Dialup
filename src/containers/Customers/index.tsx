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
import customersTable from 'constants/tables/customers';
import { testCustomersList } from 'constants/test';
import { filterFormFields } from './fields';

const Customers = () => {
  const dispatch = useAppDispatch();

  const { list, usersFilter, totalCount } = useSelector(adminSelectors.selectAdmin);
  const role = useSelector(authSelectors.selectRole);

  const [isLoading, setIsLoading] = useState(true);

  const { take, order, sort } = usersFilter;
  /* eslint-disable no-console */
  const handleDelete = (id: number) => console.log('Delete ' + id);

  const handleEnableSms = (id: number) => console.log('Enable SMS :  ' + id);

  const handleEnableApi = (id: number) => console.log('Enable Api :  ' + id);

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
    return <Navigate to={Routes.Dashboard} replace />;
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
      tableName='customers'
      showEditAction
      headCells={customersTable}
      handleDelete={handleDelete}
      handleChangePage={() => {}}
      action={ActionType.CUSTOMERS}
      linkTo={Routes.AddNewCustomers}
      rows={testCustomersList || list}
      handleChangeRowsPerPage={() => {}}
      handleSmsPermision={handleEnableSms}
      handleAPIPermision={handleEnableApi}
      dataCells={['id', 'name', 'lastname', 'email']}
      totalCount={totalCount || testCustomersList.length}
    />
  );
};

export default Customers;
