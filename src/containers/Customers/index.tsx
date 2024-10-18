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
import { RowsType } from 'components/views/Table/types';

const Customers = () => {
  const dispatch = useAppDispatch();

  const testList = [
    {
      id: '2',
      name: 'ipeim',
      lastname: 'ipeim',
      email: 'ipeim@ipeim.com',
    },
    {
      id: '3',
      name: 'supcom',
      lastname: 'supcom',
      email: 'supcom@supcom.com',
    },
    {
      id: '4',
      name: 'lsasg',
      lastname: 'lsasg',
      email: 'lsasg@lsasg.com',
    },
    {
      id: '7',
      name: 'amosbah',
      lastname: 'amosbah',
      email: 'amosbah@amosbah.com',
    },
    {
      id: '8',
      name: 'sip',
      lastname: 'sip',
      email: 'sip@sip.com',
    },
    {
      id: '9',
      name: 'Eduard',
      lastname: 'Hakobyan',
      email: 'eduard@example.com	',
    },
  ] as RowsType[];
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
      rows={testList}
      sort={sort}
      order={order}
      action={ActionType.CUSTOMERS}
      linkText='customers'
      type='secondary'
      headCells={customersTable}
      totalCount={totalCount || testList.length}
      linkTo={Routes.AddNewCustomers}
    />
  );
};

export default Customers;
