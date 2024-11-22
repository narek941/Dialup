import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loader, Table } from 'components';
import { Routes } from 'types/routes';
import { useAppDispatch } from 'hooks';
import { adminActions, adminSelectors } from 'store/adminSlice';
import { RoleType } from 'types/api';
import { authSelectors } from 'store/authSlice';
import { filterFormFields } from 'containers/Trunks/fields';
import cdrTable from 'constants/tables/cdr';
import { testCDRList } from 'constants/test';

const Cdr = () => {
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
      tableName='CDR'
      headCells={cdrTable}
      handleChangePage={() => {}}
      rows={testCDRList || list}
      handleChangeRowsPerPage={() => {}}
      dataCells={[
        'id',
        'date',
        'from',
        'to',
        'duration',
        'inChannel',
        'outChannel',
        'lastStep',
        'recording',
        'voiceMail',
      ]}
      totalCount={totalCount || testCDRList.length}
    />
  );
};

export default Cdr;
