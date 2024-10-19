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

const Customers = () => {
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
    return <Navigate to={Routes.Dashboard} replace />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Table
      take={take}
      rows={testCustomersList || list}
      sort={sort}
      order={order}
      action={ActionType.CUSTOMERS}
      linkText='customers'
      type='secondary'
      headCells={customersTable}
      totalCount={totalCount || testCustomersList.length}
      linkTo={Routes.AddNewCustomers}
    />
  );
};

export default Customers;
